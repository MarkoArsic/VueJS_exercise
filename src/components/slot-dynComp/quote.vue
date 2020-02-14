<template>
    <div>
        <div class="title">
            <slot name="title"></slot>
            <!-- default slot, when no name.. when name is used value wil be overriden -->
            <span style="color: #ccc"><slot name="subtitle">The Subtitle</slot></span>
        </div>
            <hr>
        <div class="content">
            <slot></slot>
        </div>

    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    div{
        border: 1px solid #ccc;
        box-shadow: 1px 1px 2px black;
        padding: 30px;
        margin: 30px auto;
        text-align: center;

    }
</style>