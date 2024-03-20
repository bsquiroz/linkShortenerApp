<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { getUniqueUrl } from "../actions";
import { onBeforeMount } from "vue";

onBeforeMount(() => {
    const route = useRoute();
    const router = useRouter();

    const id = route.params.id as string;
    getUniqueUrl(id)
        .then((res) => {
            if (!res) return router.replace("/");

            window.location.replace(res.urlOriginal);
        })
        .catch((error) => alert(error));
});
</script>

<template>
    <div></div>
</template>
