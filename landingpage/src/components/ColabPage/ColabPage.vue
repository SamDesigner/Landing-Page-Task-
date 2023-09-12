<template>
    <div class="space-y-4">
        <div class="relative mt-vh-10 ">
            <div class="flex justify-center flex-col  items-center gap-7 ">
                <div class="idea_tag hidden lg:block ">
                    <img src="../../assets/images/ideatag.svg" />
                </div>
                <h1 class="text-lg md:text-4xl custom_index font-bold text-specialBlack text-center mt-4 relative">Collaborate without  <br> constraints</h1>
            </div>
        </div>
        <div class="space-y-6">
            <div class="container mx-auto flex flex-col justify-center items-center md:grid md:grid-cols-2 lg:flex lg:flex-row lg:justify-between gap-6">
                <div class="p-2 space-y-2 custom_width">
                    <h3 class="text-center text-lg md:text-left  md:text-2xl font-bold text-specialBlack">Free forever</h3>
                    <p class="text-grayText text-sm text-justify">Our free plan gives you unlimited team members, 3 boards, and 300+ expert-made templates.
                         Signing up with your work email lets you bring in your team faster. See our <a class="text-primaryBlue">pricing plans</a>  for more features.</p>
                </div>
                <div class="p-2 space-y-2 custom_width">
                    <h3 class="text-center md:text-left text-lg md:text-2xl font-bold text-specialBlack">Easy Integrations</h3>
                    <p class="text-grayText text-sm text-justify">
                        Miro has 100+ powerful integrations with tools you already use like G Suite, Slack, and Jira, so your workflow is seamless. View the full list in our <a class="text-primaryBlue">Marketplace</a> .
                    </p>
                </div>
                <div class="p-2 space-y-2 custom_width" >
                    <h3 class="text-center md:text-left text-lg md:text-2xl font-bold text-specialBlack">Security First</h3>
                    <p class="text-grayText text-sm text-justify">
                        We treat your data like you would — with the utmost care. We follow industry-leading security standards and give you tools to protect intellectual property. Learn more at our <a class="text-primaryBlue">Trust Center</a>  .
                    </p>
                </div>

            </div>

            <div class="flex justify-center mt-vh-8">
                <button class="bg-primaryBlue text-white px-5 py-2 rounded-3xl text-xs md:text-lg  ">Sign up Free <i class="pi pi-arrow-right text-xs"> </i></button>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .idea_tag{
        height: 20px;
        position: relative;
        left: 16%;
        z-index:-1
    }
    .custom_index{
        z-index: -1;
    }
    .custom_width{
        width: 310.419px !important;
    }
</style>