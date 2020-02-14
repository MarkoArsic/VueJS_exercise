<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" @click="selectedTheme = 'appBlue'">Load Blue Template</button>
                <button class="btn btn-success" @click="selectedTheme = 'appGreen'">Load Green Template</button>
                <button class="btn btn-danger" @click="selectedTheme = 'appRed'">Load Red Template</button>
                <hr>
                <keep-alive>
                    <!-- <app-blue><p>This is the blue theme</p></app-blue>
                    <app-green><p>This is the green theme</p></app-green>
                    <app-red><p>This is the red theme</p></app-red> -->
                    <component :is="selectedTheme">
                        <p v-if="selectedTheme == 'appBlue'"> This is Blue Slot</p>
                        <p v-if="selectedTheme == 'appGreen'"> This is Green Slot</p>
                        <p v-if="selectedTheme == 'appRed'"> This is Red Slot</p>
                    </component>
                </keep-alive>

            </div>
        </div>
    </div>
</template>

<script>
    import Blue from '@/components/color-templates/Blue.vue';
    import Green from '@/components/color-templates/Green.vue';
    import Red from '@/components/color-templates/Red.vue';

    export default {
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        },
        data(){
            return {
                selectedTheme: ''
            }
        }
    }
</script>

<style>
</style>
