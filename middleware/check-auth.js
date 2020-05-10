export default function(context) {
    console.log('middleware check-auth');

    if (process.client) {
        context.store.dispatch('initAuth', context.req);
    }
    
}