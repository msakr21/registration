const Logout = () =>  {
return <div>
  <form action='/logout' method="post">
  <input type="hidden" name="authenticity_token" value={token} />
  <input type="hidden" name="_method" value="DELETE" />
  <button type="submit" > Logout </button>
  </form>
  </div>
}

export default Logout;