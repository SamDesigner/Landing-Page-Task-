<template>
    <div class="px-3 py-6 mt-vh-10">
        <div class="container mx-auto space-y-8 ">
            <div class="space-y-6 flex flex-col justify-center items-center">
                <h1 class="text-specialBlack text-4xl font-bold text-center ">Loved by the world's best teams</h1>
                <div>
                    <a href="#" class="border border-primaryBlue py-3 px-5 text-primaryBlue text-lg rounded-3xl">See all customer stories <i class="pi pi-arrow-right text-xs"></i></a>
                </div>
            </div>
            <ul class="grid grid-cols-1 md:grid-cols-2 space-y-8 md:space-y-0  lg:flex gap-3 mt-6">
                <li class="custom_card">
                    <div class="card_div flex flex-col justify-between p-2"  >
                        <div class="space-y-8">
                            <div class="flex justify-center items-center lg:justify-start w-full  ">
                                <div class="h-20  inline-block shadow-sm " >
                                    <img src="../../assets/images/vmware.svg" />
                                </div>

                            </div>
                           
                            <div>
                                <p class="text-center text-grayText text-md lg:text-left ">
                                    “When the pandemic hit, those of us who thrive on in-person collaboration were worried that our creativity and productivity would suffer. Miro was the perfect tool to help us with collaboration, whiteboarding, and retrospectives while remote.”
                                </p>
                            </div>
                        </div>
                      
                        <div class="flex items-center justify-center md:justify-start gap-3">
                            <div class="custom_img ">
                                <img src="../../assets/images/test-1.svg" />
                            </div>
                            <div class="">
                                <p class="text-sm text-grayText">Roxanne Mustafa</p>
                                <p class="text-sm text-grayText">Design Team Lead at VMware</p>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="custom_card">
                    <div class="card_div flex flex-col justify-between p-2"  >
                        <div class="space-y-8">
                            <div class="flex justify-center items-center lg:justify-start w-full  ">
                                <div class="h-20  inline-block lg:flex items-center lg:justify-start lg:w-full shadow-sm " >
                                    <img src="../../assets/images/docusign.svg" />
                                </div>

                            </div>
                           
                            <div>
                                <p class="text-center text-grayText text-md lg:text-left">
                                    “Miro helps solve one of the major gaps in product design: how to manage tasks across product designers whose projects are in different tools.”
                                </p>
                            </div>
                        </div>
                      
                        <div class="flex items-center justify-center md:justify-start gap-3">
                            <div class="custom_img ">
                                <img src="../../assets/images/test-2.svg" />
                            </div>
                            <div class="">
                                <p class="text-sm text-grayText">Jane Ashley</p>
                                <p class="text-sm text-grayText">Head of Design at DocuSign</p>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="custom_card">
                    <div class="card_div flex flex-col justify-between p-2"  >
                        <div class="space-y-8">
                            <div class="flex  h-20 justify-center items-center  shadow-sm lg:justify-start w-full  ">
                                <div class="  inline-block " >
                                    <img src="../../assets/images/frog.svg" />
                                </div>

                            </div>
                           
                            <div>
                                <p class="text-center text-grayText text-md lg:text-left">
                                    “As we used Miro we moved from skepticism to belief to innovation, and now we have a tool that’s at the core of what we do and will continue to extend into the future.”
                                </p>
                            </div>
                        </div>
                      
                        <div class="flex items-center justify-center md:justify-start gap-3">
                            <div class="custom_img ">
                                <img src="../../assets/images/test-3.svg" />
                            </div>
                            <div class="">
                                <p class="text-sm text-grayText">Laura Baird</p>
                                <p class="text-sm text-grayText">Associate Design Director at frog</p>
                            </div>
                        </div>
                    </div>
                </li>

              


         

            </ul>
        </div>  
    </div>
</template>

<style scoped>
    .custom_card{
        width: 359.953px;
        
        height: 460px;
    }
    .custom_card .card_div{
        height:100%;
       
   }
   @media(max-width:500px){
    .custom_card{
        width: auto !important;
    }
   }
</style>