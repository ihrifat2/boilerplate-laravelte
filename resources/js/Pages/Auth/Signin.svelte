<script>
    import MainApp from "../Layouts/MainApp.svelte";
    import { inertia } from "@inertiajs/svelte";
</script>

<svelte:head>
    <title>Sign in</title>
    <style>
        .modal-sheet .modal-dialog {
            width: 380px;
            transition: bottom 0.75s ease-in-out;
        }
        .modal-sheet .modal-footer {
            padding-bottom: 2rem;
        }
    </style>
</svelte:head>

<MainApp>
    <div
        class="modal modal-sheet d-block bg-body-secondary p-4 py-md-5"
        tabindex="-1"
        role="dialog"
        id="modalSignin"
    >
        <div class="modal-dialog" role="document">
            <div class="modal-content rounded-4 shadow">
                <div class="modal-header p-5 pb-4 border-bottom-0">
                    <h1 class="fw-bold mb-0 fs-2">Sign in</h1>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    />
                </div>

                <div class="modal-body p-5 pt-0">
                    <form class="">
                        <div class="form-floating mb-3">
                            <input
                                type="email"
                                class="form-control rounded-3"
                                id="floatingInput"
                                placeholder="name@example.com"
                            />
                            <label for="floatingInput">Email address</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input
                                type="password"
                                class="form-control rounded-3"
                                id="floatingPassword"
                                placeholder="Password"
                            />
                            <label for="floatingPassword">Password</label>
                        </div>
                        <button
                            class="w-100 mb-2 btn btn-lg rounded-3 btn-primary"
                            type="submit">Sign up</button
                        >
                        <small class="text-body-secondary"
                            >New here? Go to <a href="/registration">Signup</a></small
                        >
                        <hr class="my-4" />
                        <h2 class="fs-5 fw-bold mb-3">Or use a third-party</h2>
                        <button
                            class="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3"
                            type="submit"
                        >
                            <svg class="bi me-1" width="16" height="16"
                                ><use xlink:href="#twitter" /></svg
                            >
                            Sign up with Twitter
                        </button>
                        <button
                            class="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3"
                            type="submit"
                        >
                            <svg class="bi me-1" width="16" height="16"
                                ><use xlink:href="#facebook" /></svg
                            >
                            Sign up with Facebook
                        </button>
                        <button
                            class="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3"
                            type="submit"
                        >
                            <svg class="bi me-1" width="16" height="16"
                                ><use xlink:href="#github" /></svg
                            >
                            Sign up with GitHub
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!-- <div class="text-center">
        <main class="form-signin w-100 m-auto">
            <form>
                <a href="/" use:inertia>
                    <img
                        class="mb-4"
                        src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg"
                        alt=""
                        width="72"
                        height="57"
                    />
                </a>

                <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

                <div class="form-floating">
                    <input
                        type="email"
                        class="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                    />
                    <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating">
                    <input
                        type="password"
                        class="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                    />
                    <label for="floatingPassword">Password</label>
                </div>

                <div class="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                </div>
                <button class="w-100 btn btn-lg btn-primary" type="submit"
                    >Sign in</button
                >
                <p class="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
            </form>
        </main>
    </div> -->
</MainApp>
