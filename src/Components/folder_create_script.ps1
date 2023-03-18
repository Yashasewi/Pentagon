# to run this script, open cmd  and type: 
# 
# powershell -ExecutionPolicy Bypass -File "src\Components\folder_create_script.ps1"
#
# This script will create a jsx and css file in each folder in the components directory
# if they don't already exist. This is useful for creating new components.
#
# created by: @yashasewi 



# Find all subdirectories of the "components" directory and iterate over them
Get-ChildItem -Path "Components" -Recurse -Directory | ForEach-Object {
  
  # Get the name of the current directory
  $dir_name = $_.Name
  
    
    # Create the foldername.jsx file if it doesn't exist
    $jsx_path = Join-Path $_.FullName "${dir_name}.jsx"
    if (!(Test-Path $jsx_path)) {
      New-Item $jsx_path -ItemType File
    }
    
    # Create the foldername.css file if it doesn't exist
    $css_path = Join-Path $_.FullName "${dir_name}.css"
    if (!(Test-Path $css_path)) {
      New-Item $css_path -ItemType File
    }
    
  
}
