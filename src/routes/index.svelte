<script>
    import { Amplify,API } from "aws-amplify";
    import awsExports from '../aws-exports';
    import { listTodos } from "../graphql/queries";

    export async function load() {
	    Amplify.configure({ ...awsExports, ssr: true });
        const { data } = await API.graphql({ query: listTodos })

        return {
            props: {
                todos: data.listPosts.items
            }
        }
    }
    export let todos
</script>

<div>
    {#each todos as todo (todo.id)}
		<div class="todo">
            {todo.id}
        </div>
    {/each}
</div>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
