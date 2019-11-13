import React from 'react';
import {NavLink} from "react-router-dom";

function First() {
  return (
    <ul>
      <li className="startLink"><NavLink to="/">Main</NavLink></li>
      <li className="startLink"><NavLink to="/index">Index.html</NavLink></li>
      <li className="startLink"><NavLink to="/index_2">Index_2.html</NavLink></li>
      <li className="startLink"><NavLink to="/index_3">Index_3.html</NavLink></li>
      <li className="startLink"><NavLink to="/index_errors">Index_errors.html</NavLink></li>
      <li className="startLink"><NavLink to="/layout_moderation">Layout_moderation.html</NavLink></li>
      <li className="startLink"><NavLink to="/layout_nochannels">Layout_nochannels.html</NavLink></li>
    </ul>
  )
}

export default First;