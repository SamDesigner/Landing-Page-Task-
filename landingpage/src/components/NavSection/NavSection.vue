<template>
    <div class=" w-full bg-white nav_wrapper">
        <nav class="px-3 py-4">
            <div class="flex items-center justify-between ">
                <div class="flex items-center space-x-4">
                    <div class="logo pb-2">
                        <img src="../../assets/images/logo.svg" />
                    </div>
                    <ul class="hidden md:flex items-center space-x-6">
                        <li>
                            <a href="#" class="text-md">Product</a> 
                            <i class="pi pi-chevron-down text-xs"></i>
                        </li>
                        <li>
                            <a href="#" class="text-md">Solutions</a> 
                            <i class="pi pi-chevron-down text-xs"></i>
                        </li>
                        <li>
                            <a href="#" class="text-md">Resources</a> 
                            <i class="pi pi-chevron-down text-xs"></i>
                        </li>
                        <li>
                            <a href="#">Enterprise</a>
                        </li>
                        <li>
                            <a href="#">Pricing</a>
                        </li>
                    </ul>
                </div>
                <div class="hidden lg:flex">
                    <ul class="flex space-x-6">
                        <li>
                            <a href="#" class="flex space-x-1">
                                <img src="../../assets/images/globe.svg" />
                                <span>EN</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Contact Sales
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Login
                            </a>
                        </li>
                        <li>
                            <a href="#" class="bg-primaryBlue text-white py-3 px-5 rounded-3xl">
                                <span>Sign up free </span>
                                <i class="pi pi-arrow-right"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="block lg:hidden " @click="toggleIsOpen">
                    <span v-show="!isOpen">  <i class="pi pi-bars text-xl"> </i></span>
                    <span v-show="isOpen"><i class="pi pi-times text-xl"></i></span>
                </div>
            </div>
        </nav>
        <div 
            class="fixed w-full" 
            v-if="isOpen" 
         
        >
            <MobileNav />
        </div>
    </div>
</template>
<script>
    import MobileNav from './components/MobileNav.vue'
 
    export default{
        data(){
            return{
                isOpen:false,

            }
        },
        components:{
           MobileNav,
           
        }, 
        methods:{
            toggleIsOpen(){
                this.isOpen = !this.isOpen
            }
        }
    }
</script>
<style scoped>
    .nav_wrapper{
        z-index: 100 !important;
    }
</style>