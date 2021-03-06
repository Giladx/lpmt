#version 120

uniform sampler2DRect tex;
uniform float greenscreenR;
uniform float greenscreenG;
uniform float greenscreenB;
uniform float greenscreenT;
uniform float tintR;
uniform float tintG;
uniform float tintB;
float factor;

vec4 color;

void main( void )

{
	vec4 col = texture2DRect(tex,gl_TexCoord[0].st);
	vec4 nullo = vec4(0.0,0.0,0.0,0.0);

    if((abs(col.x-greenscreenR) < greenscreenT) && (abs(col.y-greenscreenG) < greenscreenT) && (abs(col.z-greenscreenB) < greenscreenT)) 
    {
		factor = 1.0;
    }
	else 
	{
		factor=0.0;
    }
	
	col.x = col.x*tintR;
	col.y = col.y*tintG;
	col.z = col.z*tintB;
	gl_FragColor = mix(col, nullo, factor);
}
