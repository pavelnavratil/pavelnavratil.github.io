import React from "react";

export default function Banner(): JSX.Element {
    return (
        <div className="relative isolate overflow-hidden bg-yellow-50 px-6 py-2.5 ring-1 ring-inset ring-yellow-600/20">
            <p className="text-sm text-yellow-800">
              <strong className="font-semibold">Page is under construction. </strong>
              Please come back later.
            </p>
          </div>
      )
  }
  