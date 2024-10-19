import React from 'react';
import StudioEditor from '@grapesjs/studio-sdk/react';  
import '@grapesjs/studio-sdk/style'; 
import { LICENSE_KEY } from './config';


function Editor() {
  return (
    <div className="flex flex-col h-screen">
      <nav className="p-4 bg-gray-200">
        <h1 className="text-xl font-bold">Our btfl Editor🌗</h1>
      </nav>
      <div className="flex flex-col border border-gray-300 flex-grow h-full">
        <StudioEditor
          options={{
            licenseKey:'1e9dc841f23b4de6b794aa0e0af4d0c49b2f045059524486af5bae7034338031',
            project: {
              type: 'web',
              default: {
                pages: [
                  { name: 'Home', component: '<h1>Home page</h1>' },
                  { name: 'About', component: '<h1>About page</h1>' },
                  { name: 'Contact', component: '<h1>Contact page</h1>' },
                ],
              },
            },
          }}
        />
      </div>
    </div>
  );
}

export default Editor;
