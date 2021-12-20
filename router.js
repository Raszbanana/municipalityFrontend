const router = new Navigo("/", { hash: false });
router
  .on({
  	"/": () => {
      console.log('User requested main page');
    },
    "/candidates": () => {
      console.log('User requested the about page');
    },
    "/user/:id/": ({ data }) => {
      console.log('User requested user page with id ' + data.id);
    },
	})
  .resolve();