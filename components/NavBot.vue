<template>
    <div class="navbar-bottom block md:hidden fixed bottom-0 w-full">
        <div class="bg-navbar-mobile md:bg-transparent">
            <ul class="flex justify-between">
                <li class="text-gray-200 w-full flex justify-center duration-500 hover:bg-hover-nav-bot">
                    <nuxt-link to="/" class="py-4 w-full flex justify-center">Home</nuxt-link>
                </li>
                <li class="text-gray-200 w-full flex justify-center duration-500 hover:bg-hover-nav-bot">
                    <nuxt-link to="/projects" class="py-4 w-full flex justify-center">Projects</nuxt-link>
                </li>
                <li class="text-gray-200 w-full flex justify-center duration-500 hover:bg-hover-nav-bot">
                    <nuxt-link to="/skills" class="py-4 w-full flex justify-center">Skills</nuxt-link>
                </li>
                <li class="text-gray-200 w-full flex justify-center duration-500 hover:bg-hover-nav-bot">
                    <nuxt-link to="/contact" class="py-4 w-full flex justify-center">Contact</nuxt-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<style>
.navbar-bottom{
    z-index: 100;
}
</style>