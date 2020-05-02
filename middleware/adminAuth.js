export default function ({
  store,
  redirect
}) {
  if (!store.state.admin.isAdminLoggedIn) {
    return redirect('/admin')
  }
}
