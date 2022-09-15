<template>
    <div class="add_prod">
        <add @add_prod = add_prod($event)></add>
    </div>
</template>
<script>

    import add from "../components/add_prod.vue";
    export default {
        name : "add_prod",
        components : {
        add,
    },
        methods : {
            add_prod : function (id) {
                this.$store.dispatch('add_product',id)
            .then( async (reponse) => {
                alert(reponse.data);
                this.$store.commit('refproduct');
                });
                    }
                }
    }

</script>