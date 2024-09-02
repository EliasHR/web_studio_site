<template>
    <svg
        class="icon-loading"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle
            cx="9.38086"
            cy="8.95166"
            r="7.2406"
            transform="rotate(-90 9.38086 8.95166)"
            stroke="url(#paint0_linear_6448_35128)"
            stroke-width="2.31959"
        />
        <defs>
            <linearGradient
                id="paint0_linear_6448_35128"
                x1="15.2691"
                y1="-0.702975"
                x2="0.980469"
                y2="15.1523"
                gradientUnits="userSpaceOnUse"
            >
                <stop stop-color="white" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
            </linearGradient>
        </defs>
    </svg>
</template>

<style>
.icon-loading {
    animation: 1s linear 0s normal none infinite running loadning;
    -webkit-animation: 1s linear 0s normal none infinite running loadning;
}
@keyframes loadning {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
@-webkit-keyframes loadning {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
