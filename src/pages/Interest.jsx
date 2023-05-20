
import { useState } from "react";

export function Interest() {


  return (
    <div className="flex justify-center px-20">
      {/* Grid修正 */}
      <div className="flex">
        <div className="w-1/2">
          <div className="h-2/4 bg-slate-300"></div>
          <div className="h-1/4 bg-slate-300"></div>
          <div className="h-1/4 bg-slate-300"></div>
        </div>
        <div className="w-1/2 bg-slate-300"></div>
      </div>
    </div>
  );
}
