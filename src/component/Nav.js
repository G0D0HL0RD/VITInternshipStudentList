function Nav() {
    return (
        <nav class="navbar bg-dark">
            <a href="/" class="navbar-brand text-light">React Projects</a>
            <div class="navbar nav">
                <a href="/create-student" class="nav-link">Create Student</a>
                <a href="/student-list" class="nav-link">Student List</a>
            </div>
        </nav>
     );
}

export default Nav;