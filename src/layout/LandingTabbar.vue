<template>
<div class="mobile-tabbar show-mobile">
    <div class="col">
        <div class="row">
            <router-link to="/" class="col-3 text-center">
                <font-awesome-icon icon="home" />
            </router-link>
            <router-link to="/services" class="col-3 text-center">
                <font-awesome-icon icon="book" />
            </router-link>
            <router-link to="/#work" class="col-3 text-center">
                <font-awesome-icon icon="briefcase" />
            </router-link>
            <router-link to="/recomendaciones" class="col-3 text-center">
                <font-awesome-icon icon="star" />
            </router-link>
        </div>
    </div>
</div>
</template>

<style>

.mobile-tabbar{
    position:fixed;
    bottom: 20px;
    background: #ffffff;
    box-shadow: 0 36px 64px rgba(0,0,0,0.5);
    width:90%;
    border-radius:40px;
    padding: 10px;
    margin-left: 5%;
    font-size:20px;
    z-index: 9999;
}

</style>