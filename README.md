# IAIA Website Repository

## Installation Requirements
IAIA website uses the following node.js library to boost the performance of the website:
 - gsap &rarr; animation support library
 - tailwindcss &rarr; modern UI design style support library
 - express &rarr; server library
 - pm2 &rarr; ensure no termination even with error upon deployment _To Be Implemented In Production_
 - three &rarr; 3D animation and design supports

## Run Instructions

***If the cloned repository has not been run before, do ```npm install```.***
***If ```npm``` is not installed, check for node installation status.***

Navigate to root directory and run ```node server.js```. _This command is purely for development usage, not for deployment._


## Important Notes

_None as of now_




# Archived
```
        <!-- Site header -->
        <header class="absolute w-full z-30">
            
            <div class="max-w-6xl mx-auto px-4 sm:px-6">
                <div class="flex items-center justify-between h-16 md:h-20">

                    <!-- Site branding -->
                    <div class="shrink-0 mr-4">
                        <!-- Logo -->
                        <img src="./assets/IAIA_logo_black_enlarged.png" class="m-3" style="height: 75px;" />
                    </div>


                    <div class="block md:hidden">
                        <button id="menu-toggle" class="text-gray-700 hover:text-blue-500 focus:outline-none">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                    </div>

                    <!-- Desktop navigation -->
                    <nav class="hidden md:flex md:grow" id="desktop-nav">

                        <ul class="flex grow justify-end flex-wrap items-center">

                            <li>
                                <a class="font-medium text-gray-700 hover:text-blue-500 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                                    href="index.html">Home</a>
                            </li>
                            <li>
                                <a class="font-medium text-gray-700 hover:text-blue-500 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                                    href="about.html">About Us</a>
                            </li>
                            <li>
                                <a class="font-medium text-gray-700 hover:text-blue-500 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                                    href="events.html">Events</a>
                            </li>
                            <li>
                                <a class="font-medium text-gray-700 hover:text-blue-500 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                                    href="contact.html">Contact</a>
                            </li>
                            <!-- <li class="ml-3">
                                <a class="btn-sm text-white bg-gradient-to-t from-blue-600 to-blue-400 hover:to-blue-500 w-full shadow-lg group" href="#0">
                                    Get Started <span
                                        class="tracking-normal text-blue-200 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                                </a>
                            </li> -->
                        </ul>

                    </nav>

                    <!-- Mobile Navigation -->
                    <div class="hidden md:hidden flex-col space-y-4 p-4" id="mobile-nav">
                        <ul class="flex flex-col items-start">
                            <li>
                                <a class="font-medium text-gray-700 hover:text-blue-500 px-3 py-2 flex items-center transition duration-150 ease-in-out"
                                    href="index.html">Home</a>
                            </li>
                            <li>
                                <a class="font-medium text-gray-700 hover:text-blue-500 px-3 py-2 flex items-center transition duration-150 ease-in-out"
                                    href="about.html">About Us</a>
                            </li>
                            <li>
                                <a class="font-medium text-gray-700 hover:text-blue-500 px-3 py-2 flex items-center transition duration-150 ease-in-out"
                                    href="events.html">Events</a>
                            </li>
                            <li>
                                <a class="font-medium text-gray-700 hover:text-blue-500 px-3 py-2 flex items-center transition duration-150 ease-in-out"
                                    href="contact.html">Contact</a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </header> 
```