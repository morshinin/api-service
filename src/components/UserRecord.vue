<template>
    <div>
        <img class="avatar" :src="user.avatar" />
        {{ user.first_name }} {{ user.last_name }}
    </div>
</template>
<script>
export default {
    props: {
        /** @type {import('../api/service').User}  */
        user: {
            type: Object
        }
    }
};
</script>
<style lang="less" scoped>
.avatar {
    border-radius: 9999px;
    border: 1px solid #eee;
    margin-right: 1rem;
    max-width: 1rem;
    margin-right: 0.5rem;
}
</style>