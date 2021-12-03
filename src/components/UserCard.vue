<template>
    <div class="card">
        <div><img class="card-avatar" :src="user.avatar" /></div>
        <div>
            <p>{{ user.first_name }} {{ user.last_name }}</p>
            <p>
                {{ user.email }}
                ({{ user.resource.name }})
            </p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'user-card',
    props: {
        /** @type {import('../api/service').User}  */
        user: {
            type: Object
        }
    }
};
</script>
<style lang="less" scoped>
.card {
    display: flex;
    padding: 1rem;
    box-sizing: border-box;
    height: 100%;
    background: white;
    box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.1);

    &-avatar {
        border-radius: 9999px;
        border: 1px solid #eee;
        margin-right: 1rem;
    }
}
</style>