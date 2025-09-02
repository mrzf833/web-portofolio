<template>
    <div class="container mx-auto pt-12 overflow-hidden">
        <h1 class=" text-4xl text-white text-center"><p class="text1 inline-block">This Is</p> <p class="text2 inline-block text-green-400">My Experience</p></h1>
        <div class="pt-12 flex relative">
            <div class="text-skill">
                <h3 class="text-4xl text-white border-b-4 border-green-400 pb-2 skills">Skills</h3>
            </div>
            <div class="flex flex-row flex-wrap ml-32 mt-10 overflow-hidden">
                <div v-for="(item, index) in cards" :key="index" :class="'w-full sm:w-1/2 md:w-1/3 mb-16 card-skills card-skill' + (index + 1) ">
                    <div class="flex justify-center">
                        <div class="">
                            <div class="flex justify-center w-full"><component :is="item.logo" class="w-32"></component></div>
                            <h4 class="text-xl text-center mt-5"><p class="text-yellow-300 inline-block"> {{ item.time }}</p> <p class="text-white inline-block">Of Experience</p></h4>
                        </div>
                        <div class="">
                            <div class="w-full h-full flex justify-center items-center">
                                <h4 class="text-yellow-300 text-2xl head-logo flex justify-center">
                                {{ item.head }}
                            </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import gsap from "gsap/dist/gsap"
import scrollTrigger from "gsap/dist/ScrollTrigger"
import LogoPhp from '../components/PhpLogo'
import CssLogo from '../components/CssLogo'
import MysqlLogo from '../components/MysqlLogo'
import LaravelLogo from '../components/LaravelLogo'
import VueLogo from '../components/VueLogo'
import JqueryLogo from '../components/JqueryLogo'
import JavascriptLogo from '../components/JavascriptLogo'
import BootstrapLogo from '../components/BootstrapLogo'
import TailwindcssLogo from '../components/TailwindcssLogo'
import NuxtjsLogo from '../components/NuxtjsLogo'
import PostgresqlLogo from '../components/PostgresqlLogo'

gsap.registerPlugin(scrollTrigger);
export default {
    components: {
        LogoPhp, CssLogo, MysqlLogo,
        LaravelLogo, VueLogo, JqueryLogo,
        JavascriptLogo, BootstrapLogo, TailwindcssLogo,
        NuxtjsLogo, PostgresqlLogo
    },
    data() {

        // format mm/dd/yyyy
        let phpStart = new Date("11/1/2019")
        let cssStart = new Date("11/1/2019")
        let mysqlStart = new Date("11/1/2019")
        let javascriptStart = new Date("11/1/2019")
        let jqueryStart = new Date("11/1/2019")
        let laravelStart = new Date("1/1/2020")
        let bootstrapStart = new Date("1/1/2020")
        let vueStart = new Date("5/1/2021")
        let nuxtjsStart = new Date("5/1/2021")
        let tailwindcssStart = new Date("5/1/2021")
        let postgresqlStart = new Date("5/1/2021")
        let mongoStart = new Date("3/1/2021")
        let golangStart = new Date("9/1/2022")
        let fiberStart = new Date("9/1/2022")

        let phpEnd = new Date()
        let cssEnd = new Date()
        let mysqlEnd = new Date()
        let javascriptEnd = new Date()
        let jqueryEnd = new Date()
        let laravelEnd = new Date()
        let bootstrapEnd = new Date()
        let vueEnd = new Date("8/1/2023")
        let nuxtjsEnd = new Date("8/1/2023")
        let tailwindcssEnd = new Date("8/1/2023")
        let postgresqlEnd = new Date()
        let mongoEnd = new Date("5/1/2023")
        let golangEnd = new Date()
        let fiberEnd = new Date()


        return {
            cards: [
                {
                    logo: 'LogoPhp',
                    head: 'PHP',
                    time: '> ' + this.getYearDiff(phpStart, phpEnd) + ' Year'
                },
                {
                    logo: 'CssLogo',
                    head: 'CSS',
                    time: '> ' + this.getYearDiff(cssStart, cssEnd) + ' Year'
                },
                {
                    logo: 'MysqlLogo',
                    head: 'MYSQL',
                    time: '> ' + this.getYearDiff(mysqlStart, mysqlEnd) + ' Year'
                },
                {
                    logo: 'JavascriptLogo',
                    head: 'JAVASCRIPT',
                    time: '> ' + this.getYearDiff(javascriptStart, javascriptEnd) + ' Year'
                },
                {
                    logo: 'JqueryLogo',
                    head: 'JQUERY',
                    time: '> ' + this.getYearDiff(jqueryStart, jqueryEnd) + ' Year'
                },
                {
                    logo: 'LaravelLogo',
                    head: 'LARAVEL',
                    time: '> ' + this.getYearDiff(laravelStart, laravelEnd) + ' Year'
                },
                {
                    logo: 'BootstrapLogo',
                    head: 'BOOTSTRAP',
                    time: '> ' + this.getYearDiff(bootstrapStart, bootstrapEnd) + ' Year'
                },
                {
                    logo: 'VueLogo',
                    head: 'VUEJS',
                    time: '> ' + this.getYearDiff(vueStart, vueEnd) + ' Year'
                },
                {
                    logo: 'NuxtjsLogo',
                    head: 'NUXTJS',
                    time: '> ' + this.getYearDiff(nuxtjsStart, nuxtjsEnd) + ' Year'
                },
                {
                    logo: 'TailwindcssLogo',
                    head: 'Tailwindcss',
                    time: '> ' + this.getYearDiff(tailwindcssStart, tailwindcssEnd) + ' Year'
                },
                {
                    logo: 'PostgresqlLogo',
                    head: 'POSTGRESQL',
                    time: '> ' + this.getYearDiff(postgresqlStart, postgresqlEnd) + ' Year'
                },
                {
                    logo: 'MongoLogo',
                    head: 'MongoLogo',
                    time: '> ' + this.getYearDiff(mongoStart, mongoEnd) + ' Year'
                },
                {
                    logo: 'GolangLogo',
                    head: 'Golang',
                    time: '> ' + this.getYearDiff(golangStart, golangEnd) + ' Year'
                },
                {
                    logo: 'FiberLogo',
                    head: 'GoFiber',
                    time: '> ' + this.getYearDiff(fiberStart, fiberEnd) + ' Year'
                },
            ]
        }
    },
    mounted() {
        this.startGsap()
    },
    methods: {
        startGsap: function(){
            gsap.to('.text1',{
                duration: 0.5,
                x: 0,
                opacity: 1
            })

            gsap.to('.text2',{
                duration: 0.5,
                x: 0,
                opacity: 1
            })

            gsap.to('.skills',{
                duration: 1,
                opacity: 1
            })

            for (let i = 1;  i <= this.cards.length; i++) {
                gsap.to('.card-skill' + i,{
                    scrollTrigger: {
                        trigger: '.card-skill' + i,
                        start: "top bottom",
                        end:"bottom 10%",
                        toggleActions: "restart reverse restart reverse",
                    },
                    
                    duration: 0.5,
                    x: 0,
                    opacity: 1
                })
            }
        },

        getYearDiff: function(phpStart, phpEnd){
            let years = phpEnd.getFullYear() - phpStart.getFullYear();

            // jika bulan belum lewat atau bulan sama tapi tanggal belum sama → kurangi 1 tahun
            if (
            phpEnd.getMonth() < phpStart.getMonth()
            ) {
            years--;
            }

            return years
        }
    },
}
</script>
<style scoped>
    @media only screen and (max-width: 313px) {
        .text-skill{
            display: none;
        }
        .ml-32{
            margin: 0;
        }
    }
    .skills{
        top: 50%;
        transform: translateY(-50%);
        position: fixed;
        transform: rotate(270deg);
        opacity: 0;
    }

    .text1{
        transform: translateX(-60px);
        opacity: 0;
    }

    .text2{
        transform: translateX(60px);
        opacity: 0;
    }

    .head-logo{
        transform: rotate(270deg);
    }

    .card-skills{
    transform: translatex(60px);
    opacity: 0;
}
</style>
