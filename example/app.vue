<template>
    <vue-antiscroll :height="300">
        <ul>
            <li v-for="item in arr">
                {{item.name}}
            </li>
        </ul>
    </vue-antiscroll>
</template>
<script>
    export default {
    	data () {
    		let arr = Array.apply(null, {length : 100}).map((el, index) => {
    			return {
    				id: index,
                    name: `xxxfsfsdfffff@第${index}个`
                }
            })
    		return {
    			arr
            }
        }
    }
</script>
<style>
    ul li{
        margin: 0;
        padding: 0;
    }
    ul {
        list-style: none;
    }
</style>