<template>
    <div class="mt-5 space-y-10">
        <div class="container mx-auto flex flex-col-reverse md:grid md:grid-cols-2 items-center space-x-6">
            <div class="p-3 text-sm mg:text-lg  space-y-4 md:custom_width">
                <h1 class="text-2xl lg:text-4xl text-specialBlack font-bold">Work together, wherever you work</h1>
                <p class="text-grayText text-justify">In the office, remote, or a mix of the two, with Miro, your team can connect, collaborate, and co-create in one space no matter where you are.</p>
                <div class="mt-vh-10">
                    <a href="#" class="text-primaryBlue  underline ">Learn more <i class="pi pi-arrow-right text-xs"></i></a>
                </div>
            </div>
            <div>
                <img src="../../assets/images/hybrid.svg" />
            </div>
        </div>
        <div class="container mx-auto flex flex-col md:grid grid-cols-2 items-center space-x-6">
            <div>
                <img src="../../assets/images/pcimg.svg" />
            </div>
            <div class="md:p-3 text-sm mg:text-lg space-y-4 md:text_break">
                <h1 class="text-lg md:text-2xl lg:text-4xl text-specialBlack font-bold">Connect your tools, close your tabs</h1>
                <p class="text-grayText text-justify">Whether you want to edit your Google Docs, resolve Jira issues, or collaborate over Zoom, Miro has 100+ integrations with tools you already use and love.</p>
                <div class="">
                    <a href="#" class="text-primaryBlue  underline mt-4">Learn more <i class="pi pi-arrow-right text-xs"></i></a>
                </div>
                
            </div>
        </div>
    </div>

</template>

<style scoped>
    .custom_width h1,
    .custom_width p{
        width: 400px;
    }
    .text_break h1{
        width: 355px !important;
        background: red;
    }
    
</style>