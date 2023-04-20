import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import reviewer from "/public/Images/Hero.png";

function horizontalLoop(items, config) {
    items = gsap.utils.toArray(items);
    config = config || {};
    let tl = gsap.timeline({
            repeat: config.repeat,
            paused: config.paused,
            defaults: { ease: "none" },
            onReverseComplete: () =>
                tl.totalTime(tl.rawTime() + tl.duration() * 100),
        }),
        length = items.length,
        startX = items[0].offsetLeft,
        times = [],
        widths = [],
        xPercents = [],
        curIndex = 0,
        pixelsPerSecond = (config.speed || 1) * 100,
        snap =
            config.snap === false
                ? (v) => v
                : gsap.utils.snap(config.snap || 1), // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
        totalWidth,
        curX,
        distanceToStart,
        distanceToLoop,
        item,
        i;
    gsap.set(items, {
        // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
        xPercent: (i, el) => {
            let w = (widths[i] = parseFloat(
                gsap.getProperty(el, "width", "px")
            ));
            xPercents[i] = snap(
                (parseFloat(gsap.getProperty(el, "x", "px")) / w) * 100 +
                    gsap.getProperty(el, "xPercent")
            );
            return xPercents[i];
        },
    });
    gsap.set(items, { x: 0 });
    totalWidth =
        items[length - 1].offsetLeft +
        (xPercents[length - 1] / 100) * widths[length - 1] -
        startX +
        items[length - 1].offsetWidth *
            gsap.getProperty(items[length - 1], "scaleX") +
        (parseFloat(config.paddingRight) || 0);
    for (i = 0; i < length; i++) {
        item = items[i];
        curX = (xPercents[i] / 100) * widths[i];
        distanceToStart = item.offsetLeft + curX - startX;
        distanceToLoop =
            distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
        tl.to(
            item,
            {
                xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
                duration: distanceToLoop / pixelsPerSecond,
            },
            0
        )
            .fromTo(
                item,
                {
                    xPercent: snap(
                        ((curX - distanceToLoop + totalWidth) / widths[i]) * 100
                    ),
                },
                {
                    xPercent: xPercents[i],
                    duration:
                        (curX - distanceToLoop + totalWidth - curX) /
                        pixelsPerSecond,
                    immediateRender: false,
                },
                distanceToLoop / pixelsPerSecond
            )
            .add("label" + i, distanceToStart / pixelsPerSecond);
        times[i] = distanceToStart / pixelsPerSecond;
    }
    function toIndex(index, vars) {
        vars = vars || {};
        Math.abs(index - curIndex) > length / 2 &&
            (index += index > curIndex ? -length : length); // always go in the shortest direction
        let newIndex = gsap.utils.wrap(0, length, index),
            time = times[newIndex];
        if (time > tl.time() !== index > curIndex) {
            // if we're wrapping the timeline's playhead, make the proper adjustments
            vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
            time += tl.duration() * (index > curIndex ? 1 : -1);
        }
        curIndex = newIndex;
        vars.overwrite = true;
        return tl.tweenTo(time, vars);
    }
    tl.next = (vars) => toIndex(curIndex + 1, vars);
    tl.previous = (vars) => toIndex(curIndex - 1, vars);
    tl.current = () => curIndex;
    tl.toIndex = (index, vars) => toIndex(index, vars);
    tl.times = times;
    tl.progress(1, true).progress(0, true); // pre-render for performance
    if (config.reversed) {
        tl.vars.onReverseComplete();
        tl.reverse();
    }
    return tl;
}

function Review() {
    const reviewRef = useRef(null);

    useEffect(() => {
        // console.log(reviewRef);

        const card = reviewRef.current.querySelectorAll(".reviewCard");

        const loop = horizontalLoop(card, {
            repeat: -1,
            speed: 1,
            snap: 0.5,
            paused: false,
            paddingRight: "20",
        });

        card.forEach((item) => {
            item.addEventListener("mouseenter", () => {
                gsap.to(item, {
                    scale: 1.05,
                    duration: 0.7,
                    ease: "power4.out",
                });

                loop.pause();
            });
            item.addEventListener("mouseleave", () => {
                gsap.to(item, {
                    scale: 1,
                    duration: 0.7,
                    ease: "power4.out",
                });
                //wait for 1 second before playing the loop
                gsap.delayedCall(0.2, () => loop.play());
            });
        });

        return () => {
            loop.kill();
        };
    }, []);

    return (
        <div className="reviewDiv">
            <div className="reviewHeadline">
                <h1>What people say about us?</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    ullamcorper congue eros
                </p>
            </div>
            <div className="reviewSection" ref={reviewRef}>
                <div className="reviewCard">
                    <div className="reviewInfo">
                        <h4>
                            Comfortable and met all my expectations! I ordered a
                            medium and it fit perfectly
                        </h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Ut lacus, auctor pretium ac ultrices. Dui
                            lacus dignissim tincidunt urna, at enim tempo.
                            Pellentesque amet Lorem ipsum dolor sit amet,{" "}
                        </p>
                    </div>
                    <div className="reviewer">
                        <div className="reviewerImage">
                            <Image
                                className="reviewerImage"
                                src={reviewer}
                                alt="reviewer"
                                width={50}
                                height={50}
                            />
                        </div>
                        <div className="reviewerInfo">
                            <h4>John Doe</h4>
                            <p>⭐⭐⭐⭐⭐</p>
                        </div>
                    </div>
                </div>
                <div className="reviewCard">
                    <div className="reviewInfo">
                        <h4>
                            Comfortable and met all my expectations! I ordered a
                            medium and it fit perfectly
                        </h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Ut lacus, auctor pretium ac ultrices. Dui
                            lacus dignissim tincidunt urna, at enim tempo.
                            Pellentesque amet Lorem ipsum dolor sit amet,{" "}
                        </p>
                    </div>
                    <div className="reviewer">
                        <div className="reviewerImage">
                            <Image
                                className="reviewerImage"
                                src={reviewer}
                                alt="reviewer"
                                width={50}
                                height={50}
                            />
                        </div>
                        <div className="reviewerInfo">
                            <h4>John Doe</h4>
                            <p>Customer</p>
                        </div>
                    </div>
                </div>
                <div className="reviewCard">
                    <div className="reviewInfo">
                        <h4>
                            Comfortable and met all my expectations! I ordered a
                            medium and it fit perfectly
                        </h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Ut lacus, auctor pretium ac ultrices. Dui
                            lacus dignissim tincidunt urna, at enim tempo.
                            Pellentesque amet Lorem ipsum dolor sit amet,{" "}
                        </p>
                    </div>
                    <div className="reviewer">
                        <div className="reviewerImage">
                            <Image
                                className="reviewerImage"
                                src={reviewer}
                                alt="reviewer"
                                width={50}
                                height={50}
                            />
                        </div>
                        <div className="reviewerInfo">
                            <h4>John Doe</h4>
                            <p>Customer</p>
                        </div>
                    </div>
                </div>
                <div className="reviewCard">
                    <div className="reviewInfo">
                        <h4>
                            I really love this shirt! It feels more like a light
                            flannel than a jacket
                        </h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Ut lacus, auctor pretium ac ultrices. Dui
                            lacus dignissim tincidunt urna, at enim tempo.
                            Pellentesque amet Lorem ipsum dolor sit amet,{" "}
                        </p>
                    </div>
                    <div className="reviewer">
                        <div className="reviewerImage">
                            <Image
                                className="reviewerImage"
                                src={reviewer}
                                alt="reviewer"
                                width={50}
                                height={50}
                            />
                        </div>
                        <div className="reviewerInfo">
                            <h4>John Doe</h4>
                            <p>Customer</p>
                        </div>
                    </div>
                </div>

                <div className="reviewCard">
                    <div className="reviewInfo">
                        <h4>
                            I really love this shirt! It feels more like a light
                            flannel than a jacket
                        </h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Ut lacus, auctor pretium ac ultrices. Dui
                            lacus dignissim tincidunt urna, at enim tempo.
                            Pellentesque amet Lorem ipsum dolor sit amet,{" "}
                        </p>
                    </div>
                    <div className="reviewer">
                        <div className="reviewerImage">
                            <Image
                                className="reviewerImage"
                                src={reviewer}
                                alt="reviewer"
                                width={50}
                                height={50}
                            />
                        </div>
                        <div className="reviewerInfo">
                            <h4>John Doe</h4>
                            <p>Customer</p>
                        </div>
                    </div>
                </div>
                <div className="reviewCard">
                    <div className="reviewInfo">
                        <h4>
                            Yashsaewi and met all my expectations! I ordered a
                            medium and it fit perfectly
                        </h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Ut lacus, auctor pretium ac ultrices. Dui
                            lacus dignissim tincidunt urna, at enim tempo.
                            Pellentesque amet Lorem ipsum dolor sit amet,{" "}
                        </p>
                    </div>
                    <div className="reviewer">
                        <div className="reviewerImage">
                            <Image
                                className="reviewerImage"
                                src={reviewer}
                                alt="reviewer"
                                width={50}
                                height={50}
                            />
                        </div>
                        <div className="reviewerInfo">
                            <h4>John Doe</h4>
                            <p>Customer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Review;
