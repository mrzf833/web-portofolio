<template>
    <div class="container mx-auto pt-12 overflow-hidden">
        <h1 class="text-4xl text-white text-center text1 ">Hello, Welcome To <p class="inline-block text-green-400">My Projects</p> Page</h1>
        <div class="pt-12 flex flex-row flex-wrap">
            <div class="w-full sm:w-1/2 md:w-1/3 mb-4" v-for="(item, index) in cards" :key="index">
                <div :class="'p-4 flex flex-col box' + item">
                    <img @mouseover="mouseOverImg" @mouseleave="mouseLeaveImg" :class="'rounded-t-lg w-11/12 m-auto img img' + item" src="https://images.unsplash.com/photo-1619314367523-bc28b916dd9d?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="">
                    <div :class="'text-gray-600 bg-white p-4 rounded-lg -mx-2 text-card text-card' + item">
                        <h3 class="text-2xl pb-3">Laundry</h3>
                        <p>Aplikasi untuk memenejemen usaha laundry</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
import gsap from "gsap/dist/gsap"
import scrollTrigger from "gsap/dist/ScrollTrigger"
gsap.registerPlugin(scrollTrigger);
export default {
    data() {
        return {
            cards: [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
        }
    },
    mounted() {
        this.start()
    },

    methods: {

        start: function(){
            gsap.to('.text1',{
                duration: 0.5,
                y: 0,
                opacity: 1
            })

            for (let i = 1;  i <= this.cards.length; i++) {
                gsap.to('.img' + i,{
                    scrollTrigger: {
                        trigger: '.box' + i,
                        start: "top bottom",
                        end:"bottom 10%",
                        toggleActions: "restart reverse restart reverse",
                    },
                    
                    duration: 0.5,
                    x: 0,
                    opacity: 1
                })

                gsap.to('.text-card' + i,{
                    scrollTrigger: {
                        trigger: '.box' + i,
                        start: "top bottom",
                        end:"bottom top",
                        toggleActions: "restart reverse restart reverse",
                    },
                    
                    duration: 0.5,
                    x: 0,
                    opacity: 1
                })
            }
        },
        mouseOverImg: function(e){
            e.target.style.transform = "rotate(3deg)"
        },
        mouseLeaveImg: function(e){
            e.target.style.transform = "rotate(0)"
        }
    },
}
</script>
<style scoped>
.text1{
    transform: translateY(-60px);
    opacity: 0;
}

.img{
    transform: translatex(60px);
    opacity: 0;
}

.text-card{
    transform: translatex(-60px);
    opacity: 0;
}
</style>