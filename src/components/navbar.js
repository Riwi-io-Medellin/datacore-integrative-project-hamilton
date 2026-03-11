// Navbar component
const navbarComponent ={
    render(){
        const currentUser=Authservice.getCurrentUser();
        const currrentHash=window.location.hash;
        return `
        <header class="bg-[#1e1b4b]/80 backdrop-blur-xl border-b-2 border-indigo500/30 shadow-2x1 sticky top-0 z-50">
            <div class="flex max-w-7x1 mx-auto-px-4 py-4">
                <div class="flex items-center justify-between"> 
                <div class="flex items-center space-x-3">
                    <div class="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                    <span class="text-t"
        `
    }
}