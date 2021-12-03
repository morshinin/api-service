<template>
    <div id="app">
        <header class="header">
            <h3>Список юзеров</h3>
            <label>
                <input type="checkbox" v-model="showAsCards" @change="!showAsCards" />
                карточки
            </label>
        </header>

        <section>
            <user-list :users="userList.data" v-if="userList">
                <template #default="{ user }">
                    <user-card :user="user" v-if="showAsCards"></user-card>
                    <user-record :user="user" v-else></user-record>
                </template>
            </user-list>
            <!-- pagination -->
            <ul class="pagination">
                <li v-for="(pageNumber, i) in pages" :key="i">
                    <a
                        href="#0"
                        @click.prevent="gotoPage(pageNumber)"
                        class="pagination-link"
                        :class="{ 'pagination--active': page === pageNumber }"
                    >
                        {{ pageNumber }}
                    </a>
                </li>
            </ul>
        </section>
    </div>
</template>
<script>
import Service from './api/service.js';
import UserList from './components/UserList.vue';
import UserRecord from './components/UserRecord.vue';
import UserCard from './components/UserCard.vue';

export default {
    name: 'App',
    components: {
        UserList,
        UserRecord,
        UserCard
    },
    data() {
        return {
            userList: null,
            showAsCards: true,
            pages: 0,
            page: 1
        };
    },
    mounted() {
        this.populateUser(this.page);
    },
    methods: {
        populateUser: async function (page) {
            const data = await new Service().getUsers(page);
            for (const user of data.data) {
                user.resource = await this.getUserRecord(user.id);
                user.resource = user.resource.data;
            }
            this.userList = data;
            this.pages = data.total_pages;
        },

        getUserRecord: async function (userId) {
            return await new Service().getUserResource(userId);
        },

        gotoPage: function (pageNumber) {
            this.populateUser(pageNumber);
            this.page = pageNumber;
        }
    }
};
</script>
<style lang="less" src="./app.less" scoped></style>