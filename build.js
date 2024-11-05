scriptText = scriptText
  .replace(/([a-zA-Z_]+[a-zA-Z0-9_]*) = function\(/g,'$1 = function $1\(')
  .replace(/([a-zA-Z_]+[a-zA-Z0-9_]*) : function\(/g,'$1 : function $1\(');