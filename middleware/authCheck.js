export default function({ store, router }){
  if(!store.state.token){
    router.push('/login')
  }
}