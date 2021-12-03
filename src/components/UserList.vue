<template>
    <div class="list">
        <div v-for="(user, i) in users" :key="i">
            <slot :user="user">
                <user-card :user="user" />
            </slot>
        </div>
    </div>
</template>
<script>
import UserCard from './UserCard.vue';

export default {
    components: {
        UserCard
    },
    props: {
        users: {
            type: Array,
            default() {
                return [];
            }
        }
    }
};
</script>
<style lang="less">
.list {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(22rem, auto))
}
</style>