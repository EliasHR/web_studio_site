<script setup>
import { RouterView } from 'vue-router'
import HeaderComp from '@/components/HeaderComp.vue'
import FooterComp from '@/components/FooterComp.vue'
import FloatingButtons from '@/components/ui/FloatingButtons.vue'
import { ref } from 'vue'

const isProd = ref(import.meta.env.PROD)

if (isProd.value) {
    const script_ga1 = document.createElement('script')
    script_ga1.src = 'https://www.googletagmanager.com/gtag/js?id=G-F26TTEQSY3'
    script_ga1.async = true
    document.head.appendChild(script_ga1)

    const script_ga2 = document.createElement('script')
    script_ga2.innerHTML = `window.dataLayer = window.dataLayer || [];function gtag() {dataLayer.push(arguments); }gtag('js', new Date());gtag('config', 'G-F26TTEQSY3');`
    document.head.appendChild(script_ga2)

    const script_ym = document.createElement('script')
    script_ym.type = 'text/javascript'
    script_ym.innerHTML = `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)}; m[i].l=1*new Date(); for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }} k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)}) (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym"); ym(98393474, "init", { clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true, trackHash:true });`
    document.head.appendChild(script_ym)
}

import top_illustration from '@/assets/img/top_illustration.png'
import top_illustration_tablet from '@/assets/img/top_illustration_960.png'
import top_illustration_mobile from '@/assets/img/top_illustration_560.png'

const head = document.head
const link = document.createElement('link')
link.rel = 'preload'
link.as = 'image'

if (window.innerWidth <= 767.99) {
    link.href = top_illustration_mobile
} else if (window.innerWidth <= 1199.99) {
    link.href = top_illustration_tablet
} else {
    link.href = top_illustration
}

head.insertBefore(link, head.firstChild)
</script>

<template>
    <header-comp />
    <RouterView />
    <footer-comp />
    <floating-buttons />

    <!-- Yandex.Metrika counter -->
    <noscript v-if="isProd">
        <div>
            <img
                src="https://mc.yandex.ru/watch/98393474"
                style="position: absolute; left: -9999px"
                alt=""
            />
        </div>
    </noscript>
    <!-- /Yandex.Metrika counter -->
</template>

<style scoped></style>
