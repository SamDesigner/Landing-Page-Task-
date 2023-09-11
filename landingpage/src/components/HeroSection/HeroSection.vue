<template>
    <div>
        <div class="container mx-auto flex flex-col-reverse lg:grid  lg:grid-cols-2 items-center gap-4 showcase">
            <div class="space-y-3">
                <h1 class="text-2xl lg:text-5xl font-bold line-height-24 text-specialBlack ">Take ideas from better to best</h1>
                <p class="text-grayText text-sm md:text-lg font-bold-400   ">Miro is your team's visual platform to connect,<br> collaborate, and create — together.</p>

                <div class="space-y-4">
                    <input class="border border-borderColor w-full p-3 rounded-3xl" placeholder="Enter your work email" />
                    <button class="flex bg-primaryBlue text-white w-full flex justify-center  items-center p-3 rounded-3xl space-x-2">
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
        padding-top:15vh ;
    }
</style>

