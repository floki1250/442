export default defineNuxtRouteMiddleware(async (to, from) => {
  const toast = useToast();
  const matchs = await $fetch(`/api/match`, {
    method: "GET",
    query: { code: to.params.match },
  });

  console.log("match code", to.params.match, matchs);
  if (!matchs) {
    toast.add({
      id: "error",
      title: "Error",
      description: "Match Not Found verify code.",
      icon: "i-heroicons-x-circle",
      color: "red",
    });
    return navigateTo("/match");
  }
});
