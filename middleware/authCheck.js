export default function({ store, redirect, route }){
  console.log(route)
  // if(!store.getters.token && route.name != 'login'){
  //   return redirect('/')
  // }
}