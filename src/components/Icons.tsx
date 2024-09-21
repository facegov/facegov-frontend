import React from 'react';

export type IconName =
    'bell'
    | 'messageCircle'
    | 'search'
    | 'home'
    | 'politicians'
    | 'community'
    | 'activists'
    | 'barChart'
    | 'menu'
    | 'openSource'
    | 'login'
    | 'proposal'
    | 'groups'
    | 'about';

interface IconProps {
    name: IconName;
}

const Icons: React.FC<IconProps> = ({name}) => {
    // Simple SVG icons
    const icons: Record<IconName, JSX.Element> = {
        bell: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
        </svg>,
        messageCircle: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path
                d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>,
        search: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>,
        home: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>,
        community: <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 7.16C17.94 7.15 17.87 7.15 17.81 7.16C16.43 7.11 15.33 5.98 15.33 4.58C15.33 3.15 16.48 2 17.91 2C19.34 2 20.49 3.16 20.49 4.58C20.48 5.98 19.38 7.11 18 7.16Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16.9699 14.44C18.3399 14.67 19.8499 14.43 20.9099 13.72C22.3199 12.78 22.3199 11.24 20.9099 10.3C19.8399 9.59004 18.3099 9.35003 16.9399 9.59003" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M5.96998 7.16C6.02998 7.15 6.09998 7.15 6.15998 7.16C7.53998 7.11 8.63998 5.98 8.63998 4.58C8.63998 3.15 7.48998 2 6.05998 2C4.62998 2 3.47998 3.16 3.47998 4.58C3.48998 5.98 4.58998 7.11 5.96998 7.16Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.99994 14.44C5.62994 14.67 4.11994 14.43 3.05994 13.72C1.64994 12.78 1.64994 11.24 3.05994 10.3C4.12994 9.59004 5.65994 9.35003 7.02994 9.59003" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 14.63C11.94 14.62 11.87 14.62 11.81 14.63C10.43 14.58 9.32996 13.45 9.32996 12.05C9.32996 10.62 10.48 9.46997 11.91 9.46997C13.34 9.46997 14.49 10.63 14.49 12.05C14.48 13.45 13.38 14.59 12 14.63Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9.08997 17.78C7.67997 18.72 7.67997 20.26 9.08997 21.2C10.69 22.27 13.31 22.27 14.91 21.2C16.32 20.26 16.32 18.72 14.91 17.78C13.32 16.72 10.69 16.72 9.08997 17.78Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>,
        activists: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.4"
                  d="M17.9981 7.16C17.9381 7.15 17.8681 7.15 17.8081 7.16C16.4281 7.11 15.3281 5.98 15.3281 4.58C15.3281 3.15 16.4781 2 17.9081 2C19.3381 2 20.4881 3.16 20.4881 4.58C20.4781 5.98 19.3781 7.11 17.9981 7.16Z"
                  stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path opacity="0.4"
                  d="M16.9675 14.4402C18.3375 14.6702 19.8475 14.4302 20.9075 13.7202C22.3175 12.7802 22.3175 11.2402 20.9075 10.3002C19.8375 9.59016 18.3075 9.35016 16.9375 9.59016"
                  stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path opacity="0.4"
                  d="M5.96656 7.16C6.02656 7.15 6.09656 7.15 6.15656 7.16C7.53656 7.11 8.63656 5.98 8.63656 4.58C8.63656 3.15 7.48656 2 6.05656 2C4.62656 2 3.47656 3.16 3.47656 4.58C3.48656 5.98 4.58656 7.11 5.96656 7.16Z"
                  stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path opacity="0.4"
                  d="M6.9975 14.4402C5.6275 14.6702 4.1175 14.4302 3.0575 13.7202C1.6475 12.7802 1.6475 11.2402 3.0575 10.3002C4.1275 9.59016 5.6575 9.35016 7.0275 9.59016"
                  stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path
                d="M12.0001 14.6302C11.9401 14.6202 11.8701 14.6202 11.8101 14.6302C10.4301 14.5802 9.33008 13.4502 9.33008 12.0502C9.33008 10.6202 10.4801 9.47021 11.9101 9.47021C13.3401 9.47021 14.4901 10.6302 14.4901 12.0502C14.4801 13.4502 13.3801 14.5902 12.0001 14.6302Z"
                stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path
                d="M9.0907 17.7804C7.6807 18.7204 7.6807 20.2603 9.0907 21.2003C10.6907 22.2703 13.3107 22.2703 14.9107 21.2003C16.3207 20.2603 16.3207 18.7204 14.9107 17.7804C13.3207 16.7204 10.6907 16.7204 9.0907 17.7804Z"
                stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>,
        politicians: <svg width="24" height="24" viewBox="0 0 24 24">
            <path opacity="0.4"
                  d="M17.5291 7.77C17.4591 7.76 17.3891 7.76 17.3191 7.77C15.7691 7.72 14.5391 6.45 14.5391 4.89C14.5391 3.3 15.8291 2 17.4291 2C19.0191 2 20.3191 3.29 20.3191 4.89C20.3091 6.45 19.0791 7.72 17.5291 7.77Z"
                  fill="#292D32"/>
            <path opacity="0.4"
                  d="M20.7896 14.6999C19.6696 15.4499 18.0996 15.7299 16.6496 15.5399C17.0296 14.7199 17.2296 13.8099 17.2396 12.8499C17.2396 11.8499 17.0196 10.8999 16.5996 10.0699C18.0796 9.86992 19.6496 10.1499 20.7796 10.8999C22.3596 11.9399 22.3596 13.6499 20.7896 14.6999Z"
                  fill="#292D32"/>
            <path opacity="0.4"
                  d="M6.44039 7.77C6.51039 7.76 6.58039 7.76 6.65039 7.77C8.20039 7.72 9.43039 6.45 9.43039 4.89C9.43039 3.3 8.14039 2 6.54039 2C4.95039 2 3.65039 3.29 3.65039 4.89C3.66039 6.45 4.89039 7.72 6.44039 7.77Z"
                  fill="#292D32"/>
            <path opacity="0.4"
                  d="M6.54914 12.8501C6.54914 13.8201 6.75914 14.7401 7.13914 15.5701C5.72914 15.7201 4.25914 15.4201 3.17914 14.7101C1.59914 13.6601 1.59914 11.9501 3.17914 10.9001C4.24914 10.1801 5.75914 9.8901 7.17914 10.0501C6.76914 10.8901 6.54914 11.8401 6.54914 12.8501Z"
                  fill="#292D32"/>
            <path
                d="M12.1208 15.87C12.0408 15.86 11.9508 15.86 11.8608 15.87C10.0208 15.81 8.55078 14.3 8.55078 12.44C8.55078 10.54 10.0808 9 11.9908 9C13.8908 9 15.4308 10.54 15.4308 12.44C15.4308 14.3 13.9708 15.81 12.1208 15.87Z"
                fill="#292D32"/>
            <path
                d="M8.87078 17.9399C7.36078 18.9499 7.36078 20.6099 8.87078 21.6099C10.5908 22.7599 13.4108 22.7599 15.1308 21.6099C16.6408 20.5999 16.6408 18.9399 15.1308 17.9399C13.4208 16.7899 10.6008 16.7899 8.87078 17.9399Z"
                fill="#292D32"/>
        </svg>,
        barChart: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="20" x2="18" y2="10"></line>
            <line x1="12" y1="20" x2="12" y2="4"></line>
            <line x1="6" y1="20" x2="6" y2="14"></line>
        </svg>,
        menu: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>,
        openSource: <svg fill="#000000" width="24" height="24" viewBox="0 0 32 32"
                         xmlns="http://www.w3.org/2000/svg">
            <path
                d="M-0.136 16.708c0.152-8.765 6.287-15.005 13.797-16.015 8.959-1.199 16.495 4.895 17.943 12.979 1.375 7.667-2.839 14.844-9.787 17.688-0.599 0.244-0.927 0.109-1.156-0.5l-3.453-8.969c-0.197-0.527-0.063-0.855 0.453-1.088 1.563-0.709 2.536-1.896 2.797-3.6 0.411-2.64-1.5-5.077-4.161-5.307-2.423-0.235-4.609 1.453-5 3.853-0.339 2.131 0.713 4.115 2.697 5.016 0.62 0.281 0.745 0.557 0.505 1.188l-3.469 9.031c-0.167 0.443-0.531 0.6-1 0.417-3.661-1.432-6.667-4.167-8.437-7.677-1.609-3.177-1.624-5.661-1.729-7.021zM1.213 16.584c0.027 0.427 0.041 0.921 0.084 1.427 0.405 4.64 3.197 9.26 8.452 11.817 0.209 0.093 0.287 0.052 0.365-0.145 0.959-2.527 1.927-5.052 2.901-7.579 0.083-0.208 0.041-0.307-0.152-0.427-2.041-1.287-3.057-3.131-2.943-5.552 0.063-1.391 0.6-2.615 1.537-3.636 1.932-2.109 4.968-2.568 7.453-1.135 2.052 1.187 3.197 3.484 2.916 5.839-0.235 1.968-1.244 3.479-2.953 4.5-0.172 0.104-0.224 0.187-0.145 0.389 0.979 2.532 1.953 5.063 2.916 7.595 0.079 0.203 0.157 0.244 0.36 0.145 2.297-1.068 4.208-2.599 5.688-4.64 2.244-3.115 3.171-6.579 2.728-10.391-0.88-7.584-7.703-13.865-16.489-12.781-6.844 0.839-12.604 6.615-12.719 14.573z"/>
        </svg>,
        about: <svg width="24" height="24" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <title>about</title>
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="about-white" fill="#FFFFFF" transform="translate(42.666667, 42.666667)">
                    <path
                        d="M213.333333,3.55271368e-14 C95.51296,3.55271368e-14 3.55271368e-14,95.51168 3.55271368e-14,213.333333 C3.55271368e-14,331.153707 95.51296,426.666667 213.333333,426.666667 C331.154987,426.666667 426.666667,331.153707 426.666667,213.333333 C426.666667,95.51168 331.154987,3.55271368e-14 213.333333,3.55271368e-14 Z M213.333333,384 C119.227947,384 42.6666667,307.43872 42.6666667,213.333333 C42.6666667,119.227947 119.227947,42.6666667 213.333333,42.6666667 C307.44,42.6666667 384,119.227947 384,213.333333 C384,307.43872 307.44,384 213.333333,384 Z M240.04672,128 C240.04672,143.46752 228.785067,154.666667 213.55008,154.666667 C197.698773,154.666667 186.713387,143.46752 186.713387,127.704107 C186.713387,112.5536 197.99616,101.333333 213.55008,101.333333 C228.785067,101.333333 240.04672,112.5536 240.04672,128 Z M192.04672,192 L234.713387,192 L234.713387,320 L192.04672,320 L192.04672,192 Z"
                        id="Shape">
                    </path>
                </g>
            </g>
        </svg>,
        login: <svg fill="#FFF" height="24" width="24" version="1.1" id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 297 297">
            <g>
                <g>
                    <path d="M255.75,0h-148.5c-5.522,0-10,4.478-10,10v112h-39.5c-14.612,0-26.5,11.888-26.5,26.5S43.138,175,57.75,175h39.5v112
			c0,5.522,4.478,10,10,10h148.5c5.522,0,10-4.478,10-10V10C265.75,4.478,261.272,0,255.75,0z M57.75,155
			c-3.584,0-6.5-2.916-6.5-6.5s2.916-6.5,6.5-6.5h104.5c3.687,0,7.076-2.03,8.816-5.281c1.74-3.252,1.55-7.197-0.496-10.266
			L158.936,109h19.963l26.333,39.5L178.898,188h-19.963l11.635-17.453c2.046-3.068,2.236-7.014,0.496-10.266
			c-1.74-3.251-5.129-5.281-8.816-5.281H57.75z M245.75,277h-128.5V175h26.314l-11.635,17.453
			c-2.046,3.068-2.236,7.014-0.496,10.266c1.74,3.251,5.129,5.281,8.816,5.281h44c3.344,0,6.466-1.671,8.32-4.453l33-49.5
			c2.239-3.358,2.239-7.735,0-11.094l-33-49.5c-1.854-2.782-4.977-4.453-8.32-4.453h-44c-3.688,0-7.076,2.03-8.816,5.281
			c-1.74,3.252-1.55,7.197,0.496,10.266L143.564,122H117.25V20h128.5V277z"/>
                </g>
            </g>
        </svg>,
        groups: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M5 9.5C5 6.09371 8.00993 3 12 3C15.9901 3 19 6.09371 19 9.5C19 11.6449 17.6877 14.0406 15.9606 16.2611C14.5957 18.016 13.0773 19.5329 12 20.5944C10.9227 19.5329 9.40427 18.016 8.03935 16.2611C6.31229 14.0406 5 11.6449 5 9.5ZM12 1C6.99007 1 3 4.90629 3 9.5C3 12.3551 4.68771 15.2094 6.46065 17.4889C7.99487 19.4615 9.7194 21.1574 10.7973 22.2173C10.9831 22.4001 11.1498 22.564 11.2929 22.7071C11.4804 22.8946 11.7348 23 12 23C12.2652 23 12.5196 22.8946 12.7071 22.7071C12.8502 22.564 13.0169 22.4001 13.2027 22.2174L13.2028 22.2173C14.2806 21.1573 16.0051 19.4615 17.5394 17.4889C19.3123 15.2094 21 12.3551 21 9.5C21 4.90629 17.0099 1 12 1ZM12 12.5C13.3807 12.5 14.5 11.3807 14.5 10C14.5 8.61929 13.3807 7.5 12 7.5C10.6193 7.5 9.5 8.61929 9.5 10C9.5 11.3807 10.6193 12.5 12 12.5Z"
                  fill="#000000"/>
        </svg>,
        proposal: <svg height="27" width="27" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 512 512">
            <g id="about-white" fill="#000">
                <path className="st0" d="M400.578,261.3c0,0-41.401-77.691-43.513-81.63c-7.257-13.633-20.294-23.571-44.866-23.571h-25.981
		c3.683-5.104,5.89-11.366,5.89-18.094c0-17.092-13.891-30.983-30.976-31.037h-70.17c-17.099,0.054-30.976,13.944-30.976,31.037
		c0,6.762,2.206,12.977,5.889,18.074h-12.672c-15.353,0-27.808,12.456-27.808,27.822c0,8.665,3.953,16.395,10.167,21.5
		c-11.9,3.168-20.646,13.998-20.646,26.88c0,11.528,7.013,21.418,17.004,25.642c-7.838,6.729-14.987,14.223-21.228,22.474
		c-9.571,12.578-16.828,26.461-21.783,41.083c-4.888,14.676-7.406,30.19-7.406,46.031c0,38.558,15.041,74.895,42.335,102.148
		C151.09,496.959,187.495,512,226.039,512c38.558,0,74.908-15.041,102.202-42.342c22.88-22.886,37.19-52.177,41.144-83.796
		l61.113,6.844V262.147L400.578,261.3z M190.961,129.374h70.17c4.738,0,8.624,3.845,8.624,8.631c0,3.629-2.261,6.728-5.47,7.994
		v-0.21h-76.113v0.372c-3.426-1.164-5.835-4.366-5.835-8.157C182.337,133.22,186.168,129.374,190.961,129.374z M347.128,383.391
		c-7.73,59.915-58.96,106.257-121.088,106.257c-67.476,0-122.185-54.709-122.185-122.138c0-55.292,36.716-101.999,87.107-117.095
		v-95.63h70.17v12.787c-13.796-7.297-31.247-3.878-41.13,8.895c-11.034,14.296-8.408,34.834,5.889,45.876l35.241,27.24v0.832
		c0.65,0.19,1.259,0.447,1.909,0.643l66.258,51.216c11.941,18.886,18.886,41.238,18.886,65.235
		C348.184,372.871,347.818,378.185,347.128,383.391z M261.131,186.913v7.399l-16.166,23.212l-12.645-9.64
		c-7.446-5.754-8.827-16.49-3.073-23.936c3.263-4.211,8.19-6.628,13.524-6.628c3.805,0,7.406,1.232,10.425,3.561L261.131,186.913z"
                />
                <path className="st0" d="M227.908,34.3c9.477,0.013,17.153-7.663,17.167-17.14c0-9.47-7.663-17.146-17.126-17.16
		c-9.477-0.013-17.167,7.656-17.181,17.14C210.767,26.597,218.431,34.286,227.908,34.3z"/>
                <path className="st0" d="M220.841,91.818c5.564,0.014,10.086-4.502,10.086-10.08c0.014-5.571-4.494-10.092-10.072-10.099
		c-5.564,0-10.086,4.522-10.1,10.086C210.754,87.297,215.263,91.818,220.841,91.818z"/>
                <path className="st0" d="M240.742,56.503c0,6.668,5.388,12.056,12.063,12.076c6.648,0,12.062-5.382,12.062-12.042
		c0.014-6.66-5.388-12.07-12.049-12.07C246.157,44.454,240.755,49.843,240.742,56.503z"/>
                <path className="st0" d="M290.374,384.657c-21.824,0-40.656-6.898-60.598-14.209c-19.983-7.257-40.602-14.831-64.701-14.831
		c-13.565,0-27.09,2.369-41.346,7.155c-0.041,1.577-0.095,3.154-0.095,4.738c0,56.435,45.922,102.358,102.406,102.358
		c26.576,0,51.758-10.154,70.955-28.614c16.788-16.152,27.47-37.299,30.516-60.07c0.163-1.266,0.312-2.471,0.42-3.737
		c-2.789,1.104-5.632,2.051-8.421,2.843C309.829,383.229,300.163,384.657,290.374,384.657z"/>
            </g>
        </svg>
    };
    return icons[name] || null;
};

export default Icons;
