<template>
    <div>
        <div class="container mx-auto flex flex-col-reverse items-center md:grid md:px-3 md:grid-cols-2 md:items-start lg:grid  lg:grid-cols-2 lg:items-start  gap-4 showcase">
            
            <div class="space-y-3 " >
                <h1 class="text-2xl lg:text-5xl font-bold line-height-24 text-specialBlack ">Take ideas from better to best</h1>
                <p class="text-grayText text-center text-sm md:text-left md:text-lg font-bold-400   ">Miro is your team's visual platform to connect,<br> collaborate, and create — together.</p>

                <div class="space-y-4">
                    <input class="border border-borderColor  p-2 w-full md:w-4/5  rounded-3xl" placeholder="Enter your work email" />
                    <button class="flex bg-primaryBlue text-white w-full md:w-4/5 flex justify-center  items-center p-2 rounded-3xl space-x-2">
                        <span>Sign up for free</span>
                        <span><i class="pi pi-arrow-right"></i></span>
                    </button>
                </div>
                <div>
                    <p class="text-grayText">Collaborate with your team within minutes</p>
                </div>
                <div >
                    <img src="../../assets/images/rating.svg" />
                </div>
            </div>
            <div >
                <img src="../../assets/images/hero-image.svg" />
            </div>

        </div>
    </div>
</template>

<style scoped>
    .showcase{
        padding-top:13vh ;
    }
</style>

