<script setup lang="ts">
import { ref } from "vue";
import { createUrl, getUrl, deleteUrl } from "../actions";
import { Url } from "../interfaces";

const url = ref("");
const urls = ref<Url[]>([]);

const handleSubmit = () => {
    try {
        new URL(url.value);

        createUrl({ url: url.value })
            .then(() => {
                getUrl().then((res) => {
                    urls.value = res;
                });
                alert("url creada");

                url.value = "";
            })
            .catch((error) => {
                console.log(error);
                alert("hubo un error ");
            });
    } catch (error) {
        console.log(error);
        alert("Ocurrio un error, al parecer con la url, verifica");
    }
};

const handleDelete = (id: string) => {
    const res = confirm("Seguro de esta accion?");

    if (!res) return;

    deleteUrl(id)
        .then(() => {
            getUrl().then((res) => {
                urls.value = res;
            });
            alert("Eliminado correctamente");
        })
        .catch((error) => {
            console.log(error);
            alert("Ha ocurrido un error");
        });
};

const handleCopy = async (url: string) => {
    try {
        await navigator.clipboard.writeText(url);
        alert("Contenido copiado al portapapeles");
    } catch (err) {
        console.log("Error al copiar: ", err);
    }
};

getUrl().then((res) => {
    urls.value = res;
});
</script>

<template>
    <form class="max-w-56 m-auto p-4 grid gap-4" @submit.prevent="handleSubmit">
        <div class="flex flex-col gap-2">
            <label for="url">Ingrese la url</label>
            <input
                class="px-3 py-1 rounded-full outline-none bg-slate-950 border-gray-300 border-2"
                type="text"
                id="url"
                placeholder="https://..."
                v-model="url"
            />
        </div>
        <button
            class="bg-slate-900 px-4 py-2 flex justify-center items-center uppercase font-bold rounded-full"
        >
            Acortar
        </button>
    </form>

    <ul class="flex flex-col items-center">
        <li v-for="(url, i) in urls" :key="url._id">
            <span class="font-bold">{{ i }}. </span>
            <a :href="url.urlOriginal" target="_blanck">{{ url.renameUrl }}</a>
            <i
                class="bx bx-trash text-red-500 cursor-pointer"
                @click="() => handleDelete(url._id)"
            ></i>
            <i
                class="bx bx-copy text-yellow-500 cursor-pointer"
                @click="() => handleCopy(url.renameUrl)"
            ></i>
        </li>
    </ul>
</template>
