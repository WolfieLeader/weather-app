<script lang="ts">
  import { Router, Route, Link } from "svelte-routing";
  import Home from "./pages/Home.svelte";
  import Test from "./pages/Test.svelte";

  export let url = "";
</script>

<Router {url}>
  <nav>
    <Link to="/">Home</Link>
    <Link to="test">Test</Link>
  </nav>
  <div>
    <Route path="/"><Home /></Route>
    <Route path="test" component={Test} />
  </div>
</Router>
