<template>
    <header class="header">
        <ul class="nav-items">
            <li>
                <nuxt-link to="/">Home</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/users">Users</nuxt-link>
            </li>
        </ul>
    </header>
</template>

<style scoped>
    .header {
        width: 100%;
        height:60px;
        align-items: center;
        display: flex;
        justify-content: center;
        background-color: lightgray;
    }

    .nav-items {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: space-around;
        align-items: center;
        widows: 80%;
    }

    .nav-items a {
        text-decoration: none;
        color: black;
    }

    .nav-items a:hover,
    .nav-items a:active {
        color: white
    }
</style>