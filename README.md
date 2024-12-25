# IAIA Website Repository

## Installation Requirements
IAIA website uses the following node.js library to boost the performance of the website:
 - gsap &rarr; animation support library
 - tailwindcss &rarr; modern UI design style support library
 - express &rarr; server library
 - pm2 &rarr; ensure no termination even with error upon deployment _To Be Implemented In Production_
 - three &rarr; 3D animation and design supports

## Run Instructions

***If the cloned repository has not been run before, do ```npm i```.***
***If ```npm``` is not installed, check for node installation status.***

Navigate to root directory and run ```npm run dev```. _This command is purely for development usage, not for deployment._


## Important Notes

* do `npx tailwindcss -i ./css/style.css -o ./style.css --watch` for updating style.css
