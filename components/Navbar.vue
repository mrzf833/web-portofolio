<template>
    <div class="navbar w-full fixed md:relative bg-navbar-mobile md:bg-transparent">
        <div class="container mx-auto flex">
            <div class="flex-auto">
                <div class="flex h-full items-center justify-start">
                    <p class="text-xl sm:text-2xl text-gray-200 md:text-gray-200">M R Z F 8 3 3</p>
                </div>
            </div>
            <div class="hidden md:block flex-auto">
                <div class="flex h-full items-center justify-center">
                    <div class="inline-block">
                        <div class="inline-block nav-item">
                            <div class="py-4">
                                <nuxt-link to="/" class="mx-3 text-2xl py-4 nav-link text-gray-200">Home</nuxt-link>
                            </div>
                            <hr>
                        </div>
                        <div class="inline-block nav-item">
                            <div class="py-4">
                                <nuxt-link to="/projects" class="mx-3 text-2xl py-4 nav-link text-gray-200">Projects</nuxt-link>
                            </div>
                            <hr>
                        </div>
                        <div class="inline-block nav-item">
                            <div class="py-4">
                                <nuxt-link to="/skills" class="mx-3 text-2xl py-4 nav-link text-gray-200">Skills</nuxt-link>
                            </div>
                            <hr>
                        </div>
                        <div class="inline-block nav-item">
                            <div class="py-4">
                                <nuxt-link to="/contact" class="mx-3 text-2xl py-4 nav-link text-gray-200">Contact</nuxt-link>
                            </div>
                            <hr>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex-auto">
                <div class="flex h-full items-center justify-end mx-4">
                    <div class="inline-block">
                        <p class="flex justify-center text-gray-200 md:text-gray-200 text-sm sm:text-base" id="date">Januari / 20-01-2021</p>
                        <p class="flex justify-center text-gray-200 md:text-gray-200 text-sm sm:text-base" id="clock">00 : 00 : 00</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    mounted() {
        // this.getClock()
        window.setInterval(() => {this.getClock()}, 500)
    },
    methods: {
        async getClock(){
            let clock = new Date()
            
            // date
            let options = { month: 'long'};
            let month_full = (new Intl.DateTimeFormat('id-ID', options).format(clock))
            let date = clock.getDate() < 10 ? '0' + clock.getDate() : clock.getDate()
            let month = (clock.getMonth() + 1) < 10 ? '0' + (clock.getMonth() + 1) : (clock.getMonth() + 1)
            let year = clock.getFullYear() < 10 ? '0' + clock.getFullYear() : clock.getFullYear()
            document.getElementById('date').innerHTML = month_full + ' / ' + date + '-' + month + '-' + year
            // clock
            let hour = clock.getHours() < 10 ? '0' + clock.getHours() : clock.getHours()
            let minute = clock.getMinutes() < 10 ? '0' + clock.getMinutes() : clock.getMinutes()
            let second = clock.getSeconds() < 10 ? '0' + clock.getSeconds() : clock.getSeconds()
            document.getElementById('clock').innerHTML = hour + ' : ' + minute + ' : ' + second
        }
    },
}
</script>
<style>
    .navbar{
        z-index: 100;
    }
    .nav-item hr{
        margin: 0;
        border: 2px solid #2ecc71;
        transition: 0.5s;
        transform: scale(0)
    }
    /* .item-link.active hr{
        transform: scale(0.6)
    } */
    .nav-item:hover hr{
        transform: scale(0.8)
    }
</style>
