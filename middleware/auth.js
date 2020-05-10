export default function(context) {
    if ( !context.store.getters.isAuthenticated ) {
        console.log('the user is not authenticated');
        context.redirect('/admin/auth')
    }
}