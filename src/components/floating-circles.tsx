export const FloatingCircles = () => {
    return (
      <div className="fixed inset-0 w-full h-screen z-0 pointer-events-none">
        <ul className="absolute inset-0 w-full h-full overflow-hidden">
          <li className="absolute block list-none w-20 h-20 bg-white/10 dark:bg-white/5 animate-float delay-0 left-1/4 -bottom-[150px]"></li>
          <li className="absolute block list-none w-5 h-5 bg-white/10 dark:bg-white/5 animate-float-fast delay-2 left-[10%] -bottom-[150px]"></li>
          <li className="absolute block list-none w-5 h-5 bg-white/10 dark:bg-white/5 animate-float delay-4 left-[70%] -bottom-[150px]"></li>
          <li className="absolute block list-none w-[60px] h-[60px] bg-white/10 dark:bg-white/5 animate-float-medium delay-0 left-[40%] -bottom-[150px]"></li>
          <li className="absolute block list-none w-5 h-5 bg-white/10 dark:bg-white/5 animate-float delay-0 left-[65%] -bottom-[150px]"></li>
          <li className="absolute block list-none w-[100px] h-[100px] bg-white/10 dark:bg-white/5 animate-float delay-3 left-[75%] -bottom-[150px]"></li>
          <li className="absolute block list-none w-[120px] h-[120px] bg-white/10 dark:bg-white/5 animate-float delay-7 left-[35%] -bottom-[150px]"></li>
          <li className="absolute block list-none w-[25px] h-[25px] bg-white/10 dark:bg-white/5 animate-float-slower delay-15 left-1/2 -bottom-[150px]"></li>
          <li className="absolute block list-none w-[15px] h-[15px] bg-white/10 dark:bg-white/5 animate-float-slow delay-2 left-[20%] -bottom-[150px]"></li>
          <li className="absolute block list-none w-[120px] h-[120px] bg-white/10 dark:bg-white/5 animate-float-faster delay-0 left-[85%] -bottom-[150px]"></li>
        </ul>
      </div>
    )
  }
  
  