scriptText = scriptText
  .replace(/([a-zA-Z_]+[a-zA-Z0-9_]*)\s*=\s*function\s*\(/g,'$1 = function $1\(')
  .replace(/([a-zA-Z_]+[a-zA-Z0-9_]*)\s*:\s*function\s*\(/g,'$1 : function $1\(');