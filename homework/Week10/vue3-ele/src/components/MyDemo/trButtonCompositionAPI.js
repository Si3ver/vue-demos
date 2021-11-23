import {watchEffect,ref} from 'vue';
export function handleLink(props){

  let isDisabled= props.disabled?'el-link-disabled':''
  
    const linkClass = ref('el-link')

    watchEffect(()=>{
        linkClass.value= `el-link el-link-${props.type} ${isDisabled}`
    })
    return {
        linkClass
    }
}
