<template>
    <!-- <div>
        <h1>Quotes Added</h1>
        <div class="frame">
            <div class="bar">
                <slot></slot>
            </div>
        </div>
    </div> -->
<div class="row">
    <div class="col-sm-12">
        <h1>Quotes Added</h1>   
        <div class="progress">    
            <div class="progress">
                <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" :style="{width: quoteAdded*maxQuotes +'%'}">
                    {{quoteAdded}} / {{maxQuotes}}
                </div>
            </div>
        </div>
    </div>
</div>    

</template>
<script>
export default {
    props: ['maxQuotes','quoteAdded']
}
</script>
<style scoped>
.frame {
    border-style: solid;
    border-color: #2e6da4;
    border-width: 1px;
    border-radius: 5px;
    height: 27px;
    width: 100%;

}
.bar {
    background:#337ab7;
    padding: 1px 1px;
    width: 0%;
    height: 25px;
    margin: auto;
    float: left;
    border-radius: 5px;
    color: white;
    text-align: center; 
}
h1{
    text-align: left;
}
</style>