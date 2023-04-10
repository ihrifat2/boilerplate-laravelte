<script>
	import SideBar from './include/sidebar.svelte';
</script>

<svelte:head>
	<link href="assets/plugins/global/plugins.bundle.css" rel="stylesheet" type="text/css" />
	<link href="assets/css/style.bundle.css" rel="stylesheet" type="text/css" />
	<style type="text/css">
		.apexcharts-canvas {
			position: relative;
			user-select: none;
			/* cannot give overflow: hidden as it will crop tooltips which overflow outside chart area */
		}
		
		/* scrollbar is not visible by default for legend, hence forcing the visibility */
		.apexcharts-canvas ::-webkit-scrollbar {
			-webkit-appearance: none;
			width: 6px;
		}
	  
		.apexcharts-canvas ::-webkit-scrollbar-thumb {
			border-radius: 4px;
			background-color: rgba(0, 0, 0, .5);
			box-shadow: 0 0 1px rgba(255, 255, 255, .5);
			-webkit-box-shadow: 0 0 1px rgba(255, 255, 255, .5);
		}
	  
	  
		.apexcharts-inner {
			position: relative;
		}
		
		.apexcharts-text tspan {
			font-family: inherit;
		}
		
		.legend-mouseover-inactive {
			transition: 0.15s ease all;
			opacity: 0.20;
		}
		
		.apexcharts-series-collapsed {
			opacity: 0;
		}
		
		.apexcharts-tooltip {
			border-radius: 5px;
			box-shadow: 2px 2px 6px -4px #999;
			cursor: default;
			font-size: 14px;
			left: 62px;
			opacity: 0;
			pointer-events: none;
			position: absolute;
			top: 20px;
			display: flex;
			flex-direction: column;
			overflow: hidden;
			white-space: nowrap;
			z-index: 12;
			transition: 0.15s ease all;
		}
		
		.apexcharts-tooltip.apexcharts-active {
			opacity: 1;
			transition: 0.15s ease all;
		}
		
		.apexcharts-tooltip.apexcharts-theme-light {
			border: 1px solid #e3e3e3;
			background: rgba(255, 255, 255, 0.96);
		}
		
		.apexcharts-tooltip.apexcharts-theme-dark {
			color: #fff;
			background: rgba(30, 30, 30, 0.8);
		}
		
		.apexcharts-tooltip * {
			font-family: inherit;
		}
		
		
		.apexcharts-tooltip-title {
			padding: 6px;
			font-size: 15px;
			margin-bottom: 4px;
		}
		
		.apexcharts-tooltip.apexcharts-theme-light .apexcharts-tooltip-title {
			background: #ECEFF1;
			border-bottom: 1px solid #ddd;
		}
		
		.apexcharts-tooltip.apexcharts-theme-dark .apexcharts-tooltip-title {
			background: rgba(0, 0, 0, 0.7);
			border-bottom: 1px solid #333;
		}
		
		.apexcharts-tooltip-text-value,
		.apexcharts-tooltip-text-z-value {
			display: inline-block;
			font-weight: 600;
			margin-left: 5px;
		}
		
		.apexcharts-tooltip-text-z-label:empty,
		.apexcharts-tooltip-text-z-value:empty {
			display: none;
		}
		
		.apexcharts-tooltip-text-value,
		.apexcharts-tooltip-text-z-value {
			font-weight: 600;
		}
		
		.apexcharts-tooltip-marker {
			width: 12px;
			height: 12px;
			position: relative;
			top: 0px;
			margin-right: 10px;
			border-radius: 50%;
		}
		
		.apexcharts-tooltip-series-group {
			padding: 0 10px;
			display: none;
			text-align: left;
			justify-content: left;
			align-items: center;
		}
		
		.apexcharts-tooltip-series-group.apexcharts-active .apexcharts-tooltip-marker {
			opacity: 1;
		}
		
		.apexcharts-tooltip-series-group.apexcharts-active,
		.apexcharts-tooltip-series-group:last-child {
			padding-bottom: 4px;
		}
		
		.apexcharts-tooltip-series-group-hidden {
			opacity: 0;
			height: 0;
			line-height: 0;
			padding: 0 !important;
		}
		
		.apexcharts-tooltip-y-group {
			padding: 6px 0 5px;
		}
		
		.apexcharts-tooltip-candlestick {
			padding: 4px 8px;
		}
		
		.apexcharts-tooltip-candlestick>div {
			margin: 4px 0;
		}
		
		.apexcharts-tooltip-candlestick span.value {
			font-weight: bold;
		}
		
		.apexcharts-tooltip-rangebar {
			padding: 5px 8px;
		}
		
		.apexcharts-tooltip-rangebar .category {
			font-weight: 600;
			color: #777;
		}
		
		.apexcharts-tooltip-rangebar .series-name {
			font-weight: bold;
			display: block;
			margin-bottom: 5px;
		}
		
		.apexcharts-xaxistooltip {
			opacity: 0;
			padding: 9px 10px;
			pointer-events: none;
			color: #373d3f;
			font-size: 13px;
			text-align: center;
			border-radius: 2px;
			position: absolute;
			z-index: 10;
			background: #ECEFF1;
			border: 1px solid #90A4AE;
			transition: 0.15s ease all;
		}
		
		.apexcharts-xaxistooltip.apexcharts-theme-dark {
			background: rgba(0, 0, 0, 0.7);
			border: 1px solid rgba(0, 0, 0, 0.5);
			color: #fff;
		}
		
		.apexcharts-xaxistooltip:after,
		.apexcharts-xaxistooltip:before {
			left: 50%;
			border: solid transparent;
			content: " ";
			height: 0;
			width: 0;
			position: absolute;
			pointer-events: none;
		}
		
		.apexcharts-xaxistooltip:after {
			border-color: rgba(236, 239, 241, 0);
			border-width: 6px;
			margin-left: -6px;
		}
		
		.apexcharts-xaxistooltip:before {
			border-color: rgba(144, 164, 174, 0);
			border-width: 7px;
			margin-left: -7px;
		}
		
		.apexcharts-xaxistooltip-bottom:after,
		.apexcharts-xaxistooltip-bottom:before {
			bottom: 100%;
		}
		
		.apexcharts-xaxistooltip-top:after,
		.apexcharts-xaxistooltip-top:before {
			top: 100%;
		}
		
		.apexcharts-xaxistooltip-bottom:after {
			border-bottom-color: #ECEFF1;
		}
		
		.apexcharts-xaxistooltip-bottom:before {
			border-bottom-color: #90A4AE;
		}
		
		.apexcharts-xaxistooltip-bottom.apexcharts-theme-dark:after {
			border-bottom-color: rgba(0, 0, 0, 0.5);
		}
		
		.apexcharts-xaxistooltip-bottom.apexcharts-theme-dark:before {
			border-bottom-color: rgba(0, 0, 0, 0.5);
		}
		
		.apexcharts-xaxistooltip-top:after {
			border-top-color: #ECEFF1
		}
		
		.apexcharts-xaxistooltip-top:before {
			border-top-color: #90A4AE;
		}
		
		.apexcharts-xaxistooltip-top.apexcharts-theme-dark:after {
			border-top-color: rgba(0, 0, 0, 0.5);
		}
		
		.apexcharts-xaxistooltip-top.apexcharts-theme-dark:before {
			border-top-color: rgba(0, 0, 0, 0.5);
		}
		
		.apexcharts-xaxistooltip.apexcharts-active {
			opacity: 1;
			transition: 0.15s ease all;
		}
		
		.apexcharts-yaxistooltip {
			opacity: 0;
			padding: 4px 10px;
			pointer-events: none;
			color: #373d3f;
			font-size: 13px;
			text-align: center;
			border-radius: 2px;
			position: absolute;
			z-index: 10;
			background: #ECEFF1;
			border: 1px solid #90A4AE;
		}
		
		.apexcharts-yaxistooltip.apexcharts-theme-dark {
			background: rgba(0, 0, 0, 0.7);
			border: 1px solid rgba(0, 0, 0, 0.5);
			color: #fff;
		}
		
		.apexcharts-yaxistooltip:after,
		.apexcharts-yaxistooltip:before {
			top: 50%;
			border: solid transparent;
			content: " ";
			height: 0;
			width: 0;
			position: absolute;
			pointer-events: none;
		}
		
		.apexcharts-yaxistooltip:after {
			border-color: rgba(236, 239, 241, 0);
			border-width: 6px;
			margin-top: -6px;
		}
		
		.apexcharts-yaxistooltip:before {
			border-color: rgba(144, 164, 174, 0);
			border-width: 7px;
			margin-top: -7px;
		}
		
		.apexcharts-yaxistooltip-left:after,
		.apexcharts-yaxistooltip-left:before {
			left: 100%;
		}
		
		.apexcharts-yaxistooltip-right:after,
		.apexcharts-yaxistooltip-right:before {
			right: 100%;
		}
		
		.apexcharts-yaxistooltip-left:after {
			border-left-color: #ECEFF1;
		}
		
		.apexcharts-yaxistooltip-left:before {
			border-left-color: #90A4AE;
		}
		
		.apexcharts-yaxistooltip-left.apexcharts-theme-dark:after {
			border-left-color: rgba(0, 0, 0, 0.5);
		}
		
		.apexcharts-yaxistooltip-left.apexcharts-theme-dark:before {
			border-left-color: rgba(0, 0, 0, 0.5);
		}
		
		.apexcharts-yaxistooltip-right:after {
			border-right-color: #ECEFF1;
		}
		
		.apexcharts-yaxistooltip-right:before {
			border-right-color: #90A4AE;
		}
		
		.apexcharts-yaxistooltip-right.apexcharts-theme-dark:after {
			border-right-color: rgba(0, 0, 0, 0.5);
		}
		
		.apexcharts-yaxistooltip-right.apexcharts-theme-dark:before {
			border-right-color: rgba(0, 0, 0, 0.5);
		}
		
		.apexcharts-yaxistooltip.apexcharts-active {
			opacity: 1;
		}
		
		.apexcharts-yaxistooltip-hidden {
			display: none;
		}
		
		.apexcharts-xcrosshairs,
		.apexcharts-ycrosshairs {
			pointer-events: none;
			opacity: 0;
			transition: 0.15s ease all;
		}
		
		.apexcharts-xcrosshairs.apexcharts-active,
		.apexcharts-ycrosshairs.apexcharts-active {
			opacity: 1;
			transition: 0.15s ease all;
		}
		
		.apexcharts-ycrosshairs-hidden {
			opacity: 0;
		}
		
		.apexcharts-selection-rect {
			cursor: move;
		}
		
		.svg_select_boundingRect,
		.svg_select_points_rot {
			pointer-events: none;
			opacity: 0;
			visibility: hidden;
		}
		
		.apexcharts-selection-rect+g .svg_select_boundingRect,
		.apexcharts-selection-rect+g .svg_select_points_rot {
			opacity: 0;
			visibility: hidden;
		}
		
		.apexcharts-selection-rect+g .svg_select_points_l,
		.apexcharts-selection-rect+g .svg_select_points_r {
			cursor: ew-resize;
			opacity: 1;
			visibility: visible;
		}
		
		.svg_select_points {
			fill: #efefef;
			stroke: #333;
			rx: 2;
		}
		
		.apexcharts-svg.apexcharts-zoomable.hovering-zoom {
			cursor: crosshair
		}
		
		.apexcharts-svg.apexcharts-zoomable.hovering-pan {
			cursor: move
		}
		
		.apexcharts-zoom-icon,
		.apexcharts-zoomin-icon,
		.apexcharts-zoomout-icon,
		.apexcharts-reset-icon,
		.apexcharts-pan-icon,
		.apexcharts-selection-icon,
		.apexcharts-menu-icon,
		.apexcharts-toolbar-custom-icon {
			cursor: pointer;
			width: 20px;
			height: 20px;
			line-height: 24px;
			color: #6E8192;
			text-align: center;
		}
		
		.apexcharts-zoom-icon svg,
		.apexcharts-zoomin-icon svg,
		.apexcharts-zoomout-icon svg,
		.apexcharts-reset-icon svg,
		.apexcharts-menu-icon svg {
			fill: #6E8192;
		}
		
		.apexcharts-selection-icon svg {
			fill: #444;
			transform: scale(0.76)
		}
		
		.apexcharts-theme-dark .apexcharts-zoom-icon svg,
		.apexcharts-theme-dark .apexcharts-zoomin-icon svg,
		.apexcharts-theme-dark .apexcharts-zoomout-icon svg,
		.apexcharts-theme-dark .apexcharts-reset-icon svg,
		.apexcharts-theme-dark .apexcharts-pan-icon svg,
		.apexcharts-theme-dark .apexcharts-selection-icon svg,
		.apexcharts-theme-dark .apexcharts-menu-icon svg,
		.apexcharts-theme-dark .apexcharts-toolbar-custom-icon svg {
			fill: #f3f4f5;
		}
		
		.apexcharts-canvas .apexcharts-zoom-icon.apexcharts-selected svg,
		.apexcharts-canvas .apexcharts-selection-icon.apexcharts-selected svg,
		.apexcharts-canvas .apexcharts-reset-zoom-icon.apexcharts-selected svg {
			fill: #008FFB;
		}
		
		.apexcharts-theme-light .apexcharts-selection-icon:not(.apexcharts-selected):hover svg,
		.apexcharts-theme-light .apexcharts-zoom-icon:not(.apexcharts-selected):hover svg,
		.apexcharts-theme-light .apexcharts-zoomin-icon:hover svg,
		.apexcharts-theme-light .apexcharts-zoomout-icon:hover svg,
		.apexcharts-theme-light .apexcharts-reset-icon:hover svg,
		.apexcharts-theme-light .apexcharts-menu-icon:hover svg {
			fill: #333;
		}
		
		.apexcharts-selection-icon,
		.apexcharts-menu-icon {
			position: relative;
		}
		
		.apexcharts-reset-icon {
			margin-left: 5px;
		}
		
		.apexcharts-zoom-icon,
		.apexcharts-reset-icon,
		.apexcharts-menu-icon {
			transform: scale(0.85);
		}
		
		.apexcharts-zoomin-icon,
		.apexcharts-zoomout-icon {
			transform: scale(0.7)
		}
		
		.apexcharts-zoomout-icon {
			margin-right: 3px;
		}
		
		.apexcharts-pan-icon {
			transform: scale(0.62);
			position: relative;
			left: 1px;
			top: 0px;
		}
		
		.apexcharts-pan-icon svg {
			fill: #fff;
			stroke: #6E8192;
			stroke-width: 2;
		}
		
		.apexcharts-pan-icon.apexcharts-selected svg {
			stroke: #008FFB;
		}
		
		.apexcharts-pan-icon:not(.apexcharts-selected):hover svg {
			stroke: #333;
		}
		
		.apexcharts-toolbar {
			position: absolute;
			z-index: 11;
			max-width: 176px;
			text-align: right;
			border-radius: 3px;
			padding: 0px 6px 2px 6px;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
		
		.apexcharts-menu {
			background: #fff;
			position: absolute;
			top: 100%;
			border: 1px solid #ddd;
			border-radius: 3px;
			padding: 3px;
			right: 10px;
			opacity: 0;
			min-width: 110px;
			transition: 0.15s ease all;
			pointer-events: none;
		}
		
		.apexcharts-menu.apexcharts-menu-open {
			opacity: 1;
			pointer-events: all;
			transition: 0.15s ease all;
		}
		
		.apexcharts-menu-item {
			padding: 6px 7px;
			font-size: 12px;
			cursor: pointer;
		}
		
		.apexcharts-theme-light .apexcharts-menu-item:hover {
			background: #eee;
		}
		
		.apexcharts-theme-dark .apexcharts-menu {
			background: rgba(0, 0, 0, 0.7);
			color: #fff;
		}
		
		@media screen and (min-width: 768px) {
			.apexcharts-canvas:hover .apexcharts-toolbar {
			opacity: 1;
			}
		}
		
		.apexcharts-datalabel.apexcharts-element-hidden {
			opacity: 0;
		}
		
		.apexcharts-pie-label,
		.apexcharts-datalabels,
		.apexcharts-datalabel,
		.apexcharts-datalabel-label,
		.apexcharts-datalabel-value {
			cursor: default;
			pointer-events: none;
		}
		
		.apexcharts-pie-label-delay {
			opacity: 0;
			animation-name: opaque;
			animation-duration: 0.3s;
			animation-fill-mode: forwards;
			animation-timing-function: ease;
		}
		
		.apexcharts-canvas .apexcharts-element-hidden {
			opacity: 0;
		}
		
		.apexcharts-hide .apexcharts-series-points {
			opacity: 0;
		}
		
		.apexcharts-gridline,
		.apexcharts-annotation-rect,
		.apexcharts-tooltip .apexcharts-marker,
		.apexcharts-area-series .apexcharts-area,
		.apexcharts-line,
		.apexcharts-zoom-rect,
		.apexcharts-toolbar svg,
		.apexcharts-area-series .apexcharts-series-markers .apexcharts-marker.no-pointer-events,
		.apexcharts-line-series .apexcharts-series-markers .apexcharts-marker.no-pointer-events,
		.apexcharts-radar-series path,
		.apexcharts-radar-series polygon {
			pointer-events: none;
		}
		
		
		/* markers */
		
		.apexcharts-marker {
			transition: 0.15s ease all;
		}
		
		@keyframes opaque {
			0% {
			opacity: 0;
			}
		
			100% {
			opacity: 1;
			}
		}
		
		
		/* Resize generated styles */
		
		@keyframes resizeanim {
			from {
			opacity: 0;
			}
		
			to {
			opacity: 0;
			}
		}
		
		.resize-triggers {
			animation: 1ms resizeanim;
			visibility: hidden;
			opacity: 0;
		}
		
		.resize-triggers,
		.resize-triggers>div,
		.contract-trigger:before {
			content: " ";
			display: block;
			position: absolute;
			top: 0;
			left: 0;
			height: 100%;
			width: 100%;
			overflow: hidden;
		}
		
		.resize-triggers>div {
			background: #eee;
			overflow: auto;
		}
		
		.contract-trigger:before {
			width: 200%;
			height: 200%;
		}
	</style>
</svelte:head>

<div id="kt_body" class="header-fixed header-tablet-and-mobile-fixed aside-fixed aside-secondary-disabled app">
	<div class="d-flex flex-column flex-root">
		<div class="page d-flex flex-row flex-column-fluid">
			<SideBar />
			<slot />
		</div>
	</div>
	<div id="kt_activities" class="bg-white" data-kt-drawer="true" data-kt-drawer-name="activities" data-kt-drawer-activate="true" data-kt-drawer-overlay="true" data-kt-drawer-direction="end" data-kt-drawer-toggle="#kt_activities_toggle" data-kt-drawer-close="#kt_activities_close">
		<div class="card shadow-none">
			<div class="card-header" id="kt_activities_header">
				<h3 class="card-title fw-bolder text-dark">Activity Logs</h3>
				<div class="card-toolbar">
					<button type="button" class="btn btn-sm btn-icon btn-active-light-primary me-n5" id="kt_activities_close">
						<span class="svg-icon svg-icon-1">
							<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
								<g transform="translate(12.000000, 12.000000) rotate(-45.000000) translate(-12.000000, -12.000000) translate(4.000000, 4.000000)" fill="#000000">
									<rect fill="#000000" x="0" y="7" width="16" height="2" rx="1" />
									<rect fill="#000000" opacity="0.5" transform="translate(8.000000, 8.000000) rotate(-270.000000) translate(-8.000000, -8.000000)" x="0" y="7" width="16" height="2" rx="1" />
								</g>
							</svg>
						</span>
					</button>
				</div>
			</div>
			<div class="card-body position-relative" id="kt_activities_body">
				<div id="kt_activities_scroll" class="position-relative scroll-y me-n5 pe-5" data-kt-scroll="true" data-kt-scroll-height="auto" data-kt-scroll-wrappers="#kt_activities_body" data-kt-scroll-dependencies="#kt_activities_header, #kt_activities_footer" data-kt-scroll-offset="5px">
					<div class="timeline">
						<div class="timeline-item">
							<div class="timeline-line w-40px"></div>
							<div class="timeline-icon symbol symbol-circle symbol-40px me-4">
								<div class="symbol-label bg-light">
									<span class="svg-icon svg-icon-2 svg-icon-gray-500">
										<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
											<polygon fill="#000000" opacity="0.3" points="5 15 3 21.5 9.5 19.5" />
											<path d="M13.5,21 C8.25329488,21 4,16.7467051 4,11.5 C4,6.25329488 8.25329488,2 13.5,2 C18.7467051,2 23,6.25329488 23,11.5 C23,16.7467051 18.7467051,21 13.5,21 Z M9,8 C8.44771525,8 8,8.44771525 8,9 C8,9.55228475 8.44771525,10 9,10 L18,10 C18.5522847,10 19,9.55228475 19,9 C19,8.44771525 18.5522847,8 18,8 L9,8 Z M9,12 C8.44771525,12 8,12.4477153 8,13 C8,13.5522847 8.44771525,14 9,14 L14,14 C14.5522847,14 15,13.5522847 15,13 C15,12.4477153 14.5522847,12 14,12 L9,12 Z" fill="#000000" />
										</svg>
									</span>
								</div>
							</div>
							<div class="timeline-content mb-10 mt-n1">
								<div class="pe-3 mb-5">
									<div class="fs-5 fw-bold mb-2">There are 2 new tasks for you in “AirPlus Mobile APp” project:</div>
									<div class="d-flex align-items-center mt-1 fs-6">
										<div class="text-muted me-2 fs-7">Added at 4:23 PM by</div>
										<div class="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Nina Nilson">
											<img src="assets/media/avatars/150-11.jpg" alt="img" />
										</div>
									</div>
								</div>
								<div class="overflow-auto pb-5">
									<div class="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-5">
										<a href="#" class="fs-5 text-dark text-hover-primary fw-bold w-375px min-w-200px">Meeting with customer</a>
										<div class="min-w-175px pe-2">
											<span class="badge badge-light text-muted">Application Design</span>
										</div>
										<div class="symbol-group symbol-hover flex-nowrap flex-grow-1 min-w-100px pe-2">
											<div class="symbol symbol-circle symbol-25px">
												<img src="assets/media/avatars/150-3.jpg" alt="img" />
											</div>
											<div class="symbol symbol-circle symbol-25px">
												<img src="assets/media/avatars/150-11.jpg" alt="img" />
											</div>
											<div class="symbol symbol-circle symbol-25px">
												<div class="symbol-label fs-8 fw-bold bg-primary text-inverse-primary">A</div>
											</div>
										</div>
										<div class="min-w-125px pe-2">
											<span class="badge badge-light-primary">In Progress</span>
										</div>
										<a href="#" class="btn btn-sm btn-light btn-active-light-primary">View</a>
									</div>
									<div class="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-0">
										<a href="#" class="fs-5 text-dark text-hover-primary fw-bold w-375px min-w-200px">Project Delivery Preparation</a>
										<div class="min-w-175px">
											<span class="badge badge-light text-muted">CRM System Development</span>
										</div>
										<div class="symbol-group symbol-hover flex-nowrap flex-grow-1 min-w-100px">
											<div class="symbol symbol-circle symbol-25px">
												<img src="assets/media/avatars/150-5.jpg" alt="img" />
											</div>
											<div class="symbol symbol-circle symbol-25px">
												<div class="symbol-label fs-8 fw-bold bg-success text-inverse-primary">B</div>
											</div>
										</div>
										<div class="min-w-125px">
											<span class="badge badge-light-success">Completed</span>
										</div>
										<a href="#" class="btn btn-sm btn-light btn-active-light-primary">View</a>
									</div>
								</div>
							</div>
						</div>
						<div class="timeline-item">
							<div class="timeline-line w-40px"></div>
							<div class="timeline-icon symbol symbol-circle symbol-40px">
								<div class="symbol-label bg-light">
									<span class="svg-icon svg-icon-2 svg-icon-gray-500">
										<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
											<path d="M11.6734943,8.3307728 L14.9993074,6.09979492 L14.1213255,5.22181303 C13.7308012,4.83128874 13.7308012,4.19812376 14.1213255,3.80759947 L15.535539,2.39338591 C15.9260633,2.00286161 16.5592283,2.00286161 16.9497526,2.39338591 L22.6066068,8.05024016 C22.9971311,8.44076445 22.9971311,9.07392943 22.6066068,9.46445372 L21.1923933,10.8786673 C20.801869,11.2691916 20.168704,11.2691916 19.7781797,10.8786673 L18.9002333,10.0007208 L16.6692373,13.3265608 C16.9264145,14.2523264 16.9984943,15.2320236 16.8664372,16.2092466 L16.4344698,19.4058049 C16.360509,19.9531149 15.8568695,20.3368403 15.3095595,20.2628795 C15.0925691,20.2335564 14.8912006,20.1338238 14.7363706,19.9789938 L5.02099894,10.2636221 C4.63047465,9.87309784 4.63047465,9.23993286 5.02099894,8.84940857 C5.17582897,8.69457854 5.37719743,8.59484594 5.59418783,8.56552292 L8.79074617,8.13355557 C9.76799113,8.00149544 10.7477104,8.0735815 11.6734943,8.3307728 Z" fill="#000000" />
											<polygon fill="#000000" opacity="0.3" transform="translate(7.050253, 17.949747) rotate(-315.000000) translate(-7.050253, -17.949747)" points="5.55025253 13.9497475 5.55025253 19.6640332 7.05025253 21.9497475 8.55025253 19.6640332 8.55025253 13.9497475" />
										</svg>
									</span>
								</div>
							</div>
							<div class="timeline-content mb-10 mt-n2">
								<div class="overflow-auto pe-3">
									<div class="fs-5 fw-bold mb-2">Invitation for crafting engaging designs that speak human workshop</div>
									<div class="d-flex align-items-center mt-1 fs-6">
										<div class="text-muted me-2 fs-7">Sent at 4:23 PM by</div>
										<div class="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Alan Nilson">
											<img src="assets/media/avatars/150-2.jpg" alt="img" />
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="timeline-item">
							<div class="timeline-line w-40px"></div>
							<div class="timeline-icon symbol symbol-circle symbol-40px">
								<div class="symbol-label bg-light">
									<span class="svg-icon svg-icon-2 svg-icon-gray-500">
										<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
											<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
												<rect x="0" y="0" width="24" height="24" />
												<path d="M11.7573593,15.2426407 L8.75735931,15.2426407 C8.20507456,15.2426407 7.75735931,15.6903559 7.75735931,16.2426407 C7.75735931,16.7949254 8.20507456,17.2426407 8.75735931,17.2426407 L11.7573593,17.2426407 L11.7573593,18.2426407 C11.7573593,19.3472102 10.8619288,20.2426407 9.75735931,20.2426407 L5.75735931,20.2426407 C4.65278981,20.2426407 3.75735931,19.3472102 3.75735931,18.2426407 L3.75735931,14.2426407 C3.75735931,13.1380712 4.65278981,12.2426407 5.75735931,12.2426407 L9.75735931,12.2426407 C10.8619288,12.2426407 11.7573593,13.1380712 11.7573593,14.2426407 L11.7573593,15.2426407 Z" fill="#000000" opacity="0.3" transform="translate(7.757359, 16.242641) rotate(-45.000000) translate(-7.757359, -16.242641)" />
												<path d="M12.2426407,8.75735931 L15.2426407,8.75735931 C15.7949254,8.75735931 16.2426407,8.30964406 16.2426407,7.75735931 C16.2426407,7.20507456 15.7949254,6.75735931 15.2426407,6.75735931 L12.2426407,6.75735931 L12.2426407,5.75735931 C12.2426407,4.65278981 13.1380712,3.75735931 14.2426407,3.75735931 L18.2426407,3.75735931 C19.3472102,3.75735931 20.2426407,4.65278981 20.2426407,5.75735931 L20.2426407,9.75735931 C20.2426407,10.8619288 19.3472102,11.7573593 18.2426407,11.7573593 L14.2426407,11.7573593 C13.1380712,11.7573593 12.2426407,10.8619288 12.2426407,9.75735931 L12.2426407,8.75735931 Z" fill="#000000" transform="translate(16.242641, 7.757359) rotate(-45.000000) translate(-16.242641, -7.757359)" />
												<path d="M5.89339828,3.42893219 C6.44568303,3.42893219 6.89339828,3.87664744 6.89339828,4.42893219 L6.89339828,6.42893219 C6.89339828,6.98121694 6.44568303,7.42893219 5.89339828,7.42893219 C5.34111353,7.42893219 4.89339828,6.98121694 4.89339828,6.42893219 L4.89339828,4.42893219 C4.89339828,3.87664744 5.34111353,3.42893219 5.89339828,3.42893219 Z M11.4289322,5.13603897 C11.8194565,5.52656326 11.8194565,6.15972824 11.4289322,6.55025253 L10.0147186,7.96446609 C9.62419433,8.35499039 8.99102936,8.35499039 8.60050506,7.96446609 C8.20998077,7.5739418 8.20998077,6.94077682 8.60050506,6.55025253 L10.0147186,5.13603897 C10.4052429,4.74551468 11.0384079,4.74551468 11.4289322,5.13603897 Z M0.600505063,5.13603897 C0.991029355,4.74551468 1.62419433,4.74551468 2.01471863,5.13603897 L3.42893219,6.55025253 C3.81945648,6.94077682 3.81945648,7.5739418 3.42893219,7.96446609 C3.0384079,8.35499039 2.40524292,8.35499039 2.01471863,7.96446609 L0.600505063,6.55025253 C0.209980772,6.15972824 0.209980772,5.52656326 0.600505063,5.13603897 Z" fill="#000000" opacity="0.3" transform="translate(6.014719, 5.843146) rotate(-45.000000) translate(-6.014719, -5.843146)" />
												<path d="M17.9142136,15.4497475 C18.4664983,15.4497475 18.9142136,15.8974627 18.9142136,16.4497475 L18.9142136,18.4497475 C18.9142136,19.0020322 18.4664983,19.4497475 17.9142136,19.4497475 C17.3619288,19.4497475 16.9142136,19.0020322 16.9142136,18.4497475 L16.9142136,16.4497475 C16.9142136,15.8974627 17.3619288,15.4497475 17.9142136,15.4497475 Z M23.4497475,17.1568542 C23.8402718,17.5473785 23.8402718,18.1805435 23.4497475,18.5710678 L22.0355339,19.9852814 C21.6450096,20.3758057 21.0118446,20.3758057 20.6213203,19.9852814 C20.2307961,19.5947571 20.2307961,18.9615921 20.6213203,18.5710678 L22.0355339,17.1568542 C22.4260582,16.76633 23.0592232,16.76633 23.4497475,17.1568542 Z M12.6213203,17.1568542 C13.0118446,16.76633 13.6450096,16.76633 14.0355339,17.1568542 L15.4497475,18.5710678 C15.8402718,18.9615921 15.8402718,19.5947571 15.4497475,19.9852814 C15.0592232,20.3758057 14.4260582,20.3758057 14.0355339,19.9852814 L12.6213203,18.5710678 C12.2307961,18.1805435 12.2307961,17.5473785 12.6213203,17.1568542 Z" fill="#000000" opacity="0.3" transform="translate(18.035534, 17.863961) scale(1, -1) rotate(45.000000) translate(-18.035534, -17.863961)" />
											</g>
										</svg>
									</span>
								</div>
							</div>
							<div class="timeline-content mb-10 mt-n1">
								<div class="mb-5 pe-3">
									<a href="#" class="fs-5 fw-bold text-gray-800 text-hover-primary mb-2">3 New Incoming Project Files:</a>
									<div class="d-flex align-items-center mt-1 fs-6">
										<div class="text-muted me-2 fs-7">Sent at 10:30 PM by</div>
										<div class="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Jan Hummer">
											<img src="assets/media/avatars/150-6.jpg" alt="img" />
										</div>
									</div>
								</div>
								<div class="overflow-auto pb-5">
									<div class="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-5">
										<div class="d-flex flex-aligns-center pe-10 pe-lg-20">
											<img alt="" class="w-30px me-3" src="assets/media/svg/files/pdf.svg" />
											<div class="ms-1 fw-bold">
												<a href="#" class="fs-6 text-hover-primary fw-bolder">Finance KPI App Guidelines</a>
												<div class="text-gray-400">1.9mb</div>
											</div>
										</div>
										<div class="d-flex flex-aligns-center pe-10 pe-lg-20">
											<img alt="" class="w-30px me-3" src="assets/media/svg/files/doc.svg" />
											<div class="ms-1 fw-bold">
												<a href="#" class="fs-6 text-hover-primary fw-bolder">Client UAT Testing Results</a>
												<div class="text-gray-400">18kb</div>
											</div>
										</div>
										<div class="d-flex flex-aligns-center">
											<img alt="" class="w-30px me-3" src="assets/media/svg/files/css.svg" />
											<div class="ms-1 fw-bold">
												<a href="#" class="fs-6 text-hover-primary fw-bolder">Finance Reports</a>
												<div class="text-gray-400">20mb</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="timeline-item">
							<div class="timeline-line w-40px"></div>
							<div class="timeline-icon symbol symbol-circle symbol-40px">
								<div class="symbol-label bg-light">
									<span class="svg-icon svg-icon-2 svg-icon-gray-500">
										<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
											<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
												<rect x="0" y="0" width="24" height="24" />
												<path d="M5,3 L6,3 C6.55228475,3 7,3.44771525 7,4 L7,20 C7,20.5522847 6.55228475,21 6,21 L5,21 C4.44771525,21 4,20.5522847 4,20 L4,4 C4,3.44771525 4.44771525,3 5,3 Z M10,3 L11,3 C11.5522847,3 12,3.44771525 12,4 L12,20 C12,20.5522847 11.5522847,21 11,21 L10,21 C9.44771525,21 9,20.5522847 9,20 L9,4 C9,3.44771525 9.44771525,3 10,3 Z" fill="#000000" />
												<rect fill="#000000" opacity="0.3" transform="translate(17.825568, 11.945519) rotate(-19.000000) translate(-17.825568, -11.945519)" x="16.3255682" y="2.94551858" width="3" height="18" rx="1" />
											</g>
										</svg>
									</span>
								</div>
							</div>
							<div class="timeline-content mb-10 mt-n1">
								<div class="pe-3 mb-5">
									<div class="fs-5 fw-bold mb-2">Task
									<a href="#" class="text-primary fw-bolder me-1">#45890</a>merged with
									<a href="#" class="text-primary fw-bolder me-1">#45890</a>in “Ads Pro Admin Dashboard project:</div>
									<div class="d-flex align-items-center mt-1 fs-6">
										<div class="text-muted me-2 fs-7">Initiated at 4:23 PM by</div>
										<div class="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Nina Nilson">
											<img src="assets/media/avatars/150-11.jpg" alt="img" />
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="timeline-item">
							<div class="timeline-line w-40px"></div>
							<div class="timeline-icon symbol symbol-circle symbol-40px">
								<div class="symbol-label bg-light">
									<span class="svg-icon svg-icon-2 svg-icon-gray-500">
										<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
											<path d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z" fill="#000000" fill-rule="nonzero" transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953)" />
											<path d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z" fill="#000000" fill-rule="nonzero" opacity="0.3" />
										</svg>
									</span>
								</div>
							</div>
							<div class="timeline-content mb-10 mt-n1">
								<div class="pe-3 mb-5">
									<div class="fs-5 fw-bold mb-2">3 new application design concepts added:</div>
									<div class="d-flex align-items-center mt-1 fs-6">
										<div class="text-muted me-2 fs-7">Created at 4:23 PM by</div>
										<div class="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Marcus Dotson">
											<img src="assets/media/avatars/150-3.jpg" alt="img" />
										</div>
									</div>
								</div>
								<div class="overflow-auto pb-5">
									<div class="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-7">
										<div class="overlay me-10">
											<div class="overlay-wrapper">
												<img alt="img" class="rounded w-100px" src="assets/media/stock/300x270/1.jpg" />
											</div>
											<div class="overlay-layer bg-dark bg-opacity-10 rounded">
												<a href="#" class="btn btn-sm btn-primary btn-shadow">Explore</a>
											</div>
										</div>
										<div class="overlay me-10">
											<div class="overlay-wrapper">
												<img alt="img" class="rounded w-100px" src="assets/media/stock/300x270/2.jpg" />
											</div>
											<div class="overlay-layer bg-dark bg-opacity-10 rounded">
												<a href="#" class="btn btn-sm btn-primary btn-shadow">Explore</a>
											</div>
										</div>
										<div class="overlay">
											<div class="overlay-wrapper">
												<img alt="img" class="rounded w-100px" src="assets/media/stock/300x270/3.jpg" />
											</div>
											<div class="overlay-layer bg-dark bg-opacity-10 rounded">
												<a href="#" class="btn btn-sm btn-primary btn-shadow">Explore</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="timeline-item">
							<div class="timeline-line w-40px"></div>
							<div class="timeline-icon symbol symbol-circle symbol-40px">
								<div class="symbol-label bg-light">
									<span class="svg-icon svg-icon-2 svg-icon-gray-500">
										<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
											<path d="M12.7037037,14 L15.6666667,10 L13.4444444,10 L13.4444444,6 L9,12 L11.2222222,12 L11.2222222,14 L6,14 C5.44771525,14 5,13.5522847 5,13 L5,3 C5,2.44771525 5.44771525,2 6,2 L18,2 C18.5522847,2 19,2.44771525 19,3 L19,13 C19,13.5522847 18.5522847,14 18,14 L12.7037037,14 Z" fill="#000000" opacity="0.3" />
											<path d="M9.80428954,10.9142091 L9,12 L11.2222222,12 L11.2222222,16 L15.6666667,10 L15.4615385,10 L20.2072547,6.57253826 C20.4311176,6.4108595 20.7436609,6.46126971 20.9053396,6.68513259 C20.9668779,6.77033951 21,6.87277228 21,6.97787787 L21,17 C21,18.1045695 20.1045695,19 19,19 L5,19 C3.8954305,19 3,18.1045695 3,17 L3,6.97787787 C3,6.70173549 3.22385763,6.47787787 3.5,6.47787787 C3.60510559,6.47787787 3.70753836,6.51099993 3.79274528,6.57253826 L9.80428954,10.9142091 Z" fill="#000000" />
										</svg>
									</span>
								</div>
							</div>
							<div class="timeline-content mb-10 mt-n1">
								<div class="pe-3 mb-5">
									<div class="fs-5 fw-bold mb-2">New case
									<a href="#" class="text-primary fw-bolder me-1">#67890</a>is assigned to you in Multi-platform Database Design project</div>
									<div class="overflow-auto pb-5">
										<div class="d-flex align-items-center mt-1 fs-6">
											<div class="text-muted me-2 fs-7">Added at 4:23 PM by</div>
											<a href="#" class="text-primary fw-bolder me-1">Alice Tan</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="timeline-item">
							<div class="timeline-line w-40px"></div>
							<div class="timeline-icon symbol symbol-circle symbol-40px">
								<div class="symbol-label bg-light">
									<span class="svg-icon svg-icon-2 svg-icon-gray-500">
										<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
											<path d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z" fill="#000000" fill-rule="nonzero" transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953)" />
											<path d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z" fill="#000000" fill-rule="nonzero" opacity="0.3" />
										</svg>
									</span>
								</div>
							</div>
							<div class="timeline-content mb-10 mt-n1">
								<div class="pe-3 mb-5">
									<div class="fs-5 fw-bold mb-2">You have received a new order:</div>
									<div class="d-flex align-items-center mt-1 fs-6">
										<div class="text-muted me-2 fs-7">Placed at 5:05 AM by</div>
										<div class="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Robert Rich">
											<img src="assets/media/avatars/150-14.jpg" alt="img" />
										</div>
									</div>
								</div>
								<div class="overflow-auto pb-5">
									<div class="notice d-flex bg-light-primary rounded border-primary border border-dashed min-w-lg-600px flex-shrink-0 p-6">
										<span class="svg-icon svg-icon-2tx svg-icon-primary me-4">
											<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
												<path d="M6,7 C7.1045695,7 8,6.1045695 8,5 C8,3.8954305 7.1045695,3 6,3 C4.8954305,3 4,3.8954305 4,5 C4,6.1045695 4.8954305,7 6,7 Z M6,9 C3.790861,9 2,7.209139 2,5 C2,2.790861 3.790861,1 6,1 C8.209139,1 10,2.790861 10,5 C10,7.209139 8.209139,9 6,9 Z" fill="#000000" fill-rule="nonzero" />
												<path d="M7,11.4648712 L7,17 C7,18.1045695 7.8954305,19 9,19 L15,19 L15,21 L9,21 C6.790861,21 5,19.209139 5,17 L5,8 L5,7 L7,7 L7,8 C7,9.1045695 7.8954305,10 9,10 L15,10 L15,12 L9,12 C8.27142571,12 7.58834673,11.8052114 7,11.4648712 Z" fill="#000000" fill-rule="nonzero" opacity="0.3" />
												<path d="M18,22 C19.1045695,22 20,21.1045695 20,20 C20,18.8954305 19.1045695,18 18,18 C16.8954305,18 16,18.8954305 16,20 C16,21.1045695 16.8954305,22 18,22 Z M18,24 C15.790861,24 14,22.209139 14,20 C14,17.790861 15.790861,16 18,16 C20.209139,16 22,17.790861 22,20 C22,22.209139 20.209139,24 18,24 Z" fill="#000000" fill-rule="nonzero" />
												<path d="M18,13 C19.1045695,13 20,12.1045695 20,11 C20,9.8954305 19.1045695,9 18,9 C16.8954305,9 16,9.8954305 16,11 C16,12.1045695 16.8954305,13 18,13 Z M18,15 C15.790861,15 14,13.209139 14,11 C14,8.790861 15.790861,7 18,7 C20.209139,7 22,8.790861 22,11 C22,13.209139 20.209139,15 18,15 Z" fill="#000000" fill-rule="nonzero" />
											</svg>
										</span>
										<div class="d-flex flex-stack flex-grow-1 flex-wrap flex-md-nowrap">
											<div class="mb-3 mb-md-0 fw-bold">
												<h4 class="text-gray-800 fw-bolder">Database Backup Process Completed!</h4>
												<div class="fs-6 text-gray-600 pe-7">Login into Jet Admin Dashboard to make sure the data integrity is OK</div>
											</div>
											<a href="#" class="btn btn-primary px-6 align-self-center text-nowrap">Proceed</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="timeline-item">
							<div class="timeline-line w-40px"></div>
							<div class="timeline-icon symbol symbol-circle symbol-40px">
								<div class="symbol-label bg-light">
									<span class="svg-icon svg-icon-2 svg-icon-gray-500">
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
											<path opacity="0.25" d="M3.19406 11.1644C3.09247 10.5549 3.56251 10 4.18045 10H19.8195C20.4375 10 20.9075 10.5549 20.8059 11.1644L19.4178 19.4932C19.1767 20.9398 17.9251 22 16.4586 22H7.54138C6.07486 22 4.82329 20.9398 4.58219 19.4932L3.19406 11.1644Z" fill="#7E8299" />
											<path d="M2 9.5C2 8.67157 2.67157 8 3.5 8H20.5C21.3284 8 22 8.67157 22 9.5C22 10.3284 21.3284 11 20.5 11H3.5C2.67157 11 2 10.3284 2 9.5Z" fill="#7E8299" />
											<path d="M10 13C9.44772 13 9 13.4477 9 14V18C9 18.5523 9.44772 19 10 19C10.5523 19 11 18.5523 11 18V14C11 13.4477 10.5523 13 10 13Z" fill="#7E8299" />
											<path d="M14 13C13.4477 13 13 13.4477 13 14V18C13 18.5523 13.4477 19 14 19C14.5523 19 15 18.5523 15 18V14C15 13.4477 14.5523 13 14 13Z" fill="#7E8299" />
											<g opacity="0.25">
												<path d="M10.7071 3.70711C11.0976 3.31658 11.0976 2.68342 10.7071 2.29289C10.3166 1.90237 9.68342 1.90237 9.29289 2.29289L4.29289 7.29289C3.90237 7.68342 3.90237 8.31658 4.29289 8.70711C4.68342 9.09763 5.31658 9.09763 5.70711 8.70711L10.7071 3.70711Z" fill="#7E8299" />
												<path d="M13.2929 3.70711C12.9024 3.31658 12.9024 2.68342 13.2929 2.29289C13.6834 1.90237 14.3166 1.90237 14.7071 2.29289L19.7071 7.29289C20.0976 7.68342 20.0976 8.31658 19.7071 8.70711C19.3166 9.09763 18.6834 9.09763 18.2929 8.70711L13.2929 3.70711Z" fill="#7E8299" />
											</g>
										</svg>
									</span>
								</div>
							</div>
							<div class="timeline-content mt-n1">
								<div class="pe-3 mb-5">
									<div class="fs-5 fw-bold mb-2">New order
									<a href="#" class="text-primary fw-bolder me-1">#67890</a>is placed for Workshow Planning &amp; Budget Estimation</div>
									<div class="d-flex align-items-center mt-1 fs-6">
										<div class="text-muted me-2 fs-7">Placed at 4:23 PM by</div>
										<a href="#" class="text-primary fw-bolder me-1">Jimmy Bold</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="card-footer py-5 text-center" id="kt_activities_footer">
				<a href="#" class="btn btn-bg-white text-primary">View All Activities
				<span class="svg-icon svg-icon-3 svg-icon-primary">
					<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
						<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
							<polygon points="0 0 24 0 24 24 0 24" />
							<rect fill="#000000" opacity="0.5" transform="translate(8.500000, 12.000000) rotate(-90.000000) translate(-8.500000, -12.000000)" x="7.5" y="7.5" width="2" height="9" rx="1" />
							<path d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z" fill="#000000" fill-rule="nonzero" transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)" />
						</g>
					</svg>
				</span>
			</div>
		</div>
	</div>
	<div id="kt_explore" class="explore bg-white" data-kt-drawer="true" data-kt-drawer-name="explore" data-kt-drawer-activate="true" data-kt-drawer-overlay="true" data-kt-drawer-direction="end" data-kt-drawer-toggle="#kt_explore_toggle" data-kt-drawer-close="#kt_explore_close">
		<div class="card shadow-none w-100">
			<div class="card-header" id="kt_explore_header">
				<h5 class="card-title fw-bold text-gray-600">Upgrade To Pro</h5>
				<div class="card-toolbar">
					<button type="button" class="btn btn-sm btn-icon explore-btn-dismiss me-n5" id="kt_explore_close">
						<span class="svg-icon svg-icon-2">
							<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
								<g transform="translate(12.000000, 12.000000) rotate(-45.000000) translate(-12.000000, -12.000000) translate(4.000000, 4.000000)" fill="#000000">
									<rect fill="#000000" x="0" y="7" width="16" height="2" rx="1" />
									<rect fill="#000000" opacity="0.5" transform="translate(8.000000, 8.000000) rotate(-270.000000) translate(-8.000000, -8.000000)" x="0" y="7" width="16" height="2" rx="1" />
								</g>
							</svg>
						</span>
					</button>
				</div>
			</div>
			<div class="card-body" id="kt_explore_body">
				<div id="kt_explore_scroll" class="scroll-y me-n5 pe-5" data-kt-scroll="true" data-kt-scroll-height="auto" data-kt-scroll-wrappers="#kt_explore_body" data-kt-scroll-dependencies="#kt_explore_header, #kt_explore_footer" data-kt-scroll-offset="5px">
					<div class="mb-5">
						<table class="table table-row-dashed table-row-gray-300 align-middle fs-6 fw-bold text-gray-800 gs-0 gy-3">
							<tr class="border-bottom-0">
								<th class="fw-bolder text-dark fs-3">Pro Version Benefits</th>
								<th class="text-center">
									<span class="bg-light py-2 px-4 fw-bold fs-6 rounded">Free</span>
								</th>
								<th class="text-center">
									<span class="bg-light py-2 px-4 fw-bold fs-6 rounded">Pro</span>
								</th>
							</tr>
							<tr>
								<td>UI Elements</td>
								<td class="text-center">20</td>
								<td class="text-center">100</td>
							</tr>
							<tr>
								<td>In-house Components</td>
								<td class="text-center">20</td>
								<td class="text-center">40</td>
							</tr>
							<tr>
								<td>Crafted Pages</td>
								<td class="text-center">5</td>
								<td class="text-center">20</td>
							</tr>
							<tr>
								<td>Complete Documentation</td>
								<td class="text-center">
									<span class="svg-icon svg-icon-2 explore-icon-success">
										<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
											<circle fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
											<path d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z" fill="#000000" fill-rule="nonzero" />
										</svg>
									</span>
								</td>
								<td class="text-center">
									<span class="svg-icon svg-icon-2 explore-icon-success">
										<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
											<circle fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
											<path d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z" fill="#000000" fill-rule="nonzero" />
										</svg>
									</span>
								</td>
							</tr>
							<tr>
								<td>Product Support</td>
								<td class="text-center">
									<span class="svg-icon svg-icon-2 explore-icon-danger">
										<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
											<circle fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
											<path d="M12.0355339,10.6213203 L14.863961,7.79289322 C15.2544853,7.40236893 15.8876503,7.40236893 16.2781746,7.79289322 C16.6686989,8.18341751 16.6686989,8.81658249 16.2781746,9.20710678 L13.4497475,12.0355339 L16.2781746,14.863961 C16.6686989,15.2544853 16.6686989,15.8876503 16.2781746,16.2781746 C15.8876503,16.6686989 15.2544853,16.6686989 14.863961,16.2781746 L12.0355339,13.4497475 L9.20710678,16.2781746 C8.81658249,16.6686989 8.18341751,16.6686989 7.79289322,16.2781746 C7.40236893,15.8876503 7.40236893,15.2544853 7.79289322,14.863961 L10.6213203,12.0355339 L7.79289322,9.20710678 C7.40236893,8.81658249 7.40236893,8.18341751 7.79289322,7.79289322 C8.18341751,7.40236893 8.81658249,7.40236893 9.20710678,7.79289322 L12.0355339,10.6213203 Z" fill="#000000" />
										</svg>
									</span>
								</td>
								<td class="text-center">
									<span class="svg-icon svg-icon-2 explore-icon-success">
										<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
											<circle fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
											<path d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z" fill="#000000" fill-rule="nonzero" />
										</svg>
									</span>
								</td>
							</tr>
							<tr>
								<td>Layout Builder</td>
								<td class="text-center">
									<span class="svg-icon svg-icon-2 explore-icon-danger">
										<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
											<circle fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
											<path d="M12.0355339,10.6213203 L14.863961,7.79289322 C15.2544853,7.40236893 15.8876503,7.40236893 16.2781746,7.79289322 C16.6686989,8.18341751 16.6686989,8.81658249 16.2781746,9.20710678 L13.4497475,12.0355339 L16.2781746,14.863961 C16.6686989,15.2544853 16.6686989,15.8876503 16.2781746,16.2781746 C15.8876503,16.6686989 15.2544853,16.6686989 14.863961,16.2781746 L12.0355339,13.4497475 L9.20710678,16.2781746 C8.81658249,16.6686989 8.18341751,16.6686989 7.79289322,16.2781746 C7.40236893,15.8876503 7.40236893,15.2544853 7.79289322,14.863961 L10.6213203,12.0355339 L7.79289322,9.20710678 C7.40236893,8.81658249 7.40236893,8.18341751 7.79289322,7.79289322 C8.18341751,7.40236893 8.81658249,7.40236893 9.20710678,7.79289322 L12.0355339,10.6213203 Z" fill="#000000" />
										</svg>
									</span>
								</td>
								<td class="text-center">
									<span class="svg-icon svg-icon-2 explore-icon-success">
										<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
											<circle fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
											<path d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z" fill="#000000" fill-rule="nonzero" />
										</svg>
									</span>
								</td>
							</tr>
							<tr>
								<td>Email Templates</td>
								<td class="text-center">
									<span class="svg-icon svg-icon-2 explore-icon-danger">
										<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
											<circle fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
											<path d="M12.0355339,10.6213203 L14.863961,7.79289322 C15.2544853,7.40236893 15.8876503,7.40236893 16.2781746,7.79289322 C16.6686989,8.18341751 16.6686989,8.81658249 16.2781746,9.20710678 L13.4497475,12.0355339 L16.2781746,14.863961 C16.6686989,15.2544853 16.6686989,15.8876503 16.2781746,16.2781746 C15.8876503,16.6686989 15.2544853,16.6686989 14.863961,16.2781746 L12.0355339,13.4497475 L9.20710678,16.2781746 C8.81658249,16.6686989 8.18341751,16.6686989 7.79289322,16.2781746 C7.40236893,15.8876503 7.40236893,15.2544853 7.79289322,14.863961 L10.6213203,12.0355339 L7.79289322,9.20710678 C7.40236893,8.81658249 7.40236893,8.18341751 7.79289322,7.79289322 C8.18341751,7.40236893 8.81658249,7.40236893 9.20710678,7.79289322 L12.0355339,10.6213203 Z" fill="#000000" />
										</svg>
									</span>
								</td>
								<td class="text-center">
									<span class="svg-icon svg-icon-2 explore-icon-success">
										<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
											<circle fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
											<path d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z" fill="#000000" fill-rule="nonzero" />
										</svg>
									</span>
								</td>
							</tr>
							<tr>
								<td>Chat App</td>
								<td class="text-center">
									<span class="svg-icon svg-icon-2 explore-icon-danger">
										<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
											<circle fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
											<path d="M12.0355339,10.6213203 L14.863961,7.79289322 C15.2544853,7.40236893 15.8876503,7.40236893 16.2781746,7.79289322 C16.6686989,8.18341751 16.6686989,8.81658249 16.2781746,9.20710678 L13.4497475,12.0355339 L16.2781746,14.863961 C16.6686989,15.2544853 16.6686989,15.8876503 16.2781746,16.2781746 C15.8876503,16.6686989 15.2544853,16.6686989 14.863961,16.2781746 L12.0355339,13.4497475 L9.20710678,16.2781746 C8.81658249,16.6686989 8.18341751,16.6686989 7.79289322,16.2781746 C7.40236893,15.8876503 7.40236893,15.2544853 7.79289322,14.863961 L10.6213203,12.0355339 L7.79289322,9.20710678 C7.40236893,8.81658249 7.40236893,8.18341751 7.79289322,7.79289322 C8.18341751,7.40236893 8.81658249,7.40236893 9.20710678,7.79289322 L12.0355339,10.6213203 Z" fill="#000000" />
										</svg>
									</span>
								</td>
								<td class="text-center">
									<span class="svg-icon svg-icon-2 explore-icon-success">
										<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
											<circle fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
											<path d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z" fill="#000000" fill-rule="nonzero" />
										</svg>
									</span>
								</td>
							</tr>
							<tr>
								<td>Customers App</td>
								<td class="text-center">
									<span class="svg-icon svg-icon-2 explore-icon-danger">
										<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
											<circle fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
											<path d="M12.0355339,10.6213203 L14.863961,7.79289322 C15.2544853,7.40236893 15.8876503,7.40236893 16.2781746,7.79289322 C16.6686989,8.18341751 16.6686989,8.81658249 16.2781746,9.20710678 L13.4497475,12.0355339 L16.2781746,14.863961 C16.6686989,15.2544853 16.6686989,15.8876503 16.2781746,16.2781746 C15.8876503,16.6686989 15.2544853,16.6686989 14.863961,16.2781746 L12.0355339,13.4497475 L9.20710678,16.2781746 C8.81658249,16.6686989 8.18341751,16.6686989 7.79289322,16.2781746 C7.40236893,15.8876503 7.40236893,15.2544853 7.79289322,14.863961 L10.6213203,12.0355339 L7.79289322,9.20710678 C7.40236893,8.81658249 7.40236893,8.18341751 7.79289322,7.79289322 C8.18341751,7.40236893 8.81658249,7.40236893 9.20710678,7.79289322 L12.0355339,10.6213203 Z" fill="#000000" />
										</svg>
									</span>
								</td>
								<td class="text-center">
									<span class="svg-icon svg-icon-2 explore-icon-success">
										<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
											<circle fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
											<path d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z" fill="#000000" fill-rule="nonzero" />
										</svg>
									</span>
								</td>
							</tr>
						</table>
					</div>
					<a href="https://keenthemes.com/products/jet-html-pro" class="btn btn-lg explore-btn-primary w-100">Upgrade to
					<span class="fw-bolder ms-1">Jet HTML Pro</span></a>
				</div>
			</div>
			<div class="card-footer py-5 text-center" id="kt_explore_footer">
				<a href="https://keenthemes.com/products/jet-html-free" class="btn btn-lg explore-btn-secondary w-100">Download
				<span class="fw-bolder ms-1">Jet HTML Free</span></a>
			</div>
		</div>
	</div>
	<div class="modal fade" id="kt_modal_create_app" tabindex="-1" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered mw-900px">
			<div class="modal-content">
				<div class="modal-header">
					<h2>Create App</h2>
					<div class="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
						<span class="svg-icon svg-icon-1">
							<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
								<g transform="translate(12.000000, 12.000000) rotate(-45.000000) translate(-12.000000, -12.000000) translate(4.000000, 4.000000)" fill="#000000">
									<rect fill="#000000" x="0" y="7" width="16" height="2" rx="1" />
									<rect fill="#000000" opacity="0.5" transform="translate(8.000000, 8.000000) rotate(-270.000000) translate(-8.000000, -8.000000)" x="0" y="7" width="16" height="2" rx="1" />
								</g>
							</svg>
						</span>
					</div>
				</div>
				<div class="modal-body py-lg-10 px-lg-10">
					<div class="stepper stepper-pills stepper-column d-flex flex-column flex-xl-row flex-row-fluid" id="kt_modal_create_app_stepper">
						<div class="d-flex justify-content-center justify-content-xl-start flex-row-auto w-100 w-xl-300px">
							<div class="stepper-nav ps-lg-10">
								<div class="stepper-item current" data-kt-stepper-element="nav">
									<div class="stepper-line w-40px"></div>
									<div class="stepper-icon w-40px h-40px">
										<i class="stepper-check fas fa-check"></i>
										<span class="stepper-number">1</span>
									</div>
									<div class="stepper-label">
										<h3 class="stepper-title">Details</h3>
										<div class="stepper-desc">Name your App</div>
									</div>
								</div>
								<div class="stepper-item" data-kt-stepper-element="nav">
									<div class="stepper-line w-40px"></div>
									<div class="stepper-icon w-40px h-40px">
										<i class="stepper-check fas fa-check"></i>
										<span class="stepper-number">2</span>
									</div>
									<div class="stepper-label">
										<h3 class="stepper-title">Frameworks</h3>
										<div class="stepper-desc">Define your app framework</div>
									</div>
								</div>
								<div class="stepper-item" data-kt-stepper-element="nav">
									<div class="stepper-line w-40px"></div>
									<div class="stepper-icon w-40px h-40px">
										<i class="stepper-check fas fa-check"></i>
										<span class="stepper-number">3</span>
									</div>
									<div class="stepper-label">
										<h3 class="stepper-title">Database</h3>
										<div class="stepper-desc">Select the app database type</div>
									</div>
								</div>
								<div class="stepper-item" data-kt-stepper-element="nav">
									<div class="stepper-line w-40px"></div>
									<div class="stepper-icon w-40px h-40px">
										<i class="stepper-check fas fa-check"></i>
										<span class="stepper-number">4</span>
									</div>
									<div class="stepper-label">
										<h3 class="stepper-title">Billing</h3>
										<div class="stepper-desc">Provide payment details</div>
									</div>
								</div>
								<div class="stepper-item" data-kt-stepper-element="nav">
									<div class="stepper-line w-40px"></div>
									<div class="stepper-icon w-40px h-40px">
										<i class="stepper-check fas fa-check"></i>
										<span class="stepper-number">5</span>
									</div>
									<div class="stepper-label">
										<h3 class="stepper-title">Release</h3>
										<div class="stepper-desc">Review and Submit</div>
									</div>
								</div>
							</div>
						</div>
						<div class="flex-row-fluid py-lg-5 px-lg-15">
							<form class="form" novalidate="novalidate" id="kt_modal_create_app_form">
								<div class="current" data-kt-stepper-element="content">
									<div class="w-100">
										<div class="fv-row mb-10">
											<label class="d-flex align-items-center fs-5 fw-bold mb-2">
												<span class="required">App Name</span>
												<i class="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Specify your unique app name"></i>
											</label>
											<input type="text" class="form-control form-control-lg form-control-solid" name="name" placeholder="" value="" />
										</div>
										<div class="fv-row">
											<label class="d-flex align-items-center fs-5 fw-bold mb-4">
												<span class="required">Category</span>
												<i class="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Select your app category"></i>
											</label>
											<div class="fv-row">
												<label class="d-flex flex-stack mb-5 cursor-pointer">
													<span class="d-flex align-items-center me-2">
														<span class="symbol symbol-50px me-6">
															<span class="symbol-label bg-light-primary">
																<span class="svg-icon svg-icon-1 svg-icon-primary">
																	<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
																		<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
																			<rect x="0" y="0" width="24" height="24" />
																			<path d="M13,18.9450712 L13,20 L14,20 C15.1045695,20 16,20.8954305 16,22 L8,22 C8,20.8954305 8.8954305,20 10,20 L11,20 L11,18.9448245 C9.02872877,18.7261967 7.20827378,17.866394 5.79372555,16.5182701 L4.73856106,17.6741866 C4.36621808,18.0820826 3.73370941,18.110904 3.32581341,17.7385611 C2.9179174,17.3662181 2.88909597,16.7337094 3.26143894,16.3258134 L5.04940685,14.367122 C5.46150313,13.9156769 6.17860937,13.9363085 6.56406875,14.4106998 C7.88623094,16.037907 9.86320756,17 12,17 C15.8659932,17 19,13.8659932 19,10 C19,7.73468744 17.9175842,5.65198725 16.1214335,4.34123851 C15.6753081,4.01567657 15.5775721,3.39010038 15.903134,2.94397499 C16.228696,2.49784959 16.8542722,2.4001136 17.3003976,2.72567554 C19.6071362,4.40902808 21,7.08906798 21,10 C21,14.6325537 17.4999505,18.4476269 13,18.9450712 Z" fill="#000000" fill-rule="nonzero" />
																			<circle fill="#000000" opacity="0.3" cx="12" cy="10" r="6" />
																		</g>
																	</svg>
																</span>
															</span>
														</span>
														<span class="d-flex flex-column">
															<span class="fw-bolder fs-6">Quick Online Courses</span>
															<span class="fs-7 text-muted">Creating a clear text structure is just one SEO</span>
														</span>
													</span>
													<span class="form-check form-check-custom form-check-solid">
														<input class="form-check-input" type="radio" name="category" value="1" />
													</span>
												</label>
												<label class="d-flex flex-stack mb-5 cursor-pointer">
													<span class="d-flex align-items-center me-2">
														<span class="symbol symbol-50px me-6">
															<span class="symbol-label bg-light-danger">
																<span class="svg-icon svg-icon-1 svg-icon-danger">
																	<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
																		<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
																			<rect x="5" y="5" width="5" height="5" rx="1" fill="#000000" />
																			<rect x="14" y="5" width="5" height="5" rx="1" fill="#000000" opacity="0.3" />
																			<rect x="5" y="14" width="5" height="5" rx="1" fill="#000000" opacity="0.3" />
																			<rect x="14" y="14" width="5" height="5" rx="1" fill="#000000" opacity="0.3" />
																		</g>
																	</svg>
																</span>
															</span>
														</span>
														<span class="d-flex flex-column">
															<span class="fw-bolder fs-6">Face to Face Discussions</span>
															<span class="fs-7 text-muted">Creating a clear text structure is just one aspect</span>
														</span>
													</span>
													<span class="form-check form-check-custom form-check-solid">
														<input class="form-check-input" type="radio" name="category" value="2" />
													</span>
												</label>
												<label class="d-flex flex-stack cursor-pointer">
													<span class="d-flex align-items-center me-2">
														<span class="symbol symbol-50px me-6">
															<span class="symbol-label bg-light-success">
																<span class="svg-icon svg-icon-1 svg-icon-success">
																	<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
																		<path d="M9,8 C8.44771525,8 8,8.44771525 8,9 L8,15 C8,15.5522847 8.44771525,16 9,16 L15,16 C15.5522847,16 16,15.5522847 16,15 L16,9 C16,8.44771525 15.5522847,8 15,8 L9,8 Z M9,6 L15,6 C16.6568542,6 18,7.34314575 18,9 L18,15 C18,16.6568542 16.6568542,18 15,18 L9,18 C7.34314575,18 6,16.6568542 6,15 L6,9 C6,7.34314575 7.34314575,6 9,6 Z" fill="#000000" fill-rule="nonzero" />
																		<path d="M9,8 C8.44771525,8 8,8.44771525 8,9 L8,15 C8,15.5522847 8.44771525,16 9,16 L15,16 C15.5522847,16 16,15.5522847 16,15 L16,9 C16,8.44771525 15.5522847,8 15,8 L9,8 Z" fill="#000000" opacity="0.3" />
																		<path d="M9,18 L15,18 L15,20.5 C15,21.3284271 14.3284271,22 13.5,22 L10.5,22 C9.67157288,22 9,21.3284271 9,20.5 L9,18 Z" fill="#000000" opacity="0.3" />
																		<path d="M10.5,2 L13.5,2 C14.3284271,2 15,2.67157288 15,3.5 L15,6 L9,6 L9,3.5 C9,2.67157288 9.67157288,2 10.5,2 Z" fill="#000000" opacity="0.3" />
																	</svg>
																</span>
															</span>
														</span>
														<span class="d-flex flex-column">
															<span class="fw-bolder fs-6">Full Intro Training</span>
															<span class="fs-7 text-muted">Creating a clear text structure copywriting</span>
														</span>
													</span>
													<span class="form-check form-check-custom form-check-solid">
														<input class="form-check-input" type="radio" name="category" value="3" />
													</span>
												</label>
											</div>
										</div>
									</div>
								</div>
								<div data-kt-stepper-element="content">
									<div class="w-100">
										<div class="fv-row">
											<label class="d-flex align-items-center fs-5 fw-bold mb-4">
												<span class="required">Select Framework</span>
												<i class="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Specify your apps framework"></i>
											</label>
											<label class="d-flex flex-stack cursor-pointer mb-5">
												<span class="d-flex align-items-center me-2">
													<span class="symbol symbol-50px me-6">
														<span class="symbol-label bg-light-warning">
															<i class="fab fa-html5 text-warning fs-2x"></i>
														</span>
													</span>
													<span class="d-flex flex-column">
														<span class="fw-bolder fs-6">HTML5</span>
														<span class="fs-7 text-muted">Base Web Projec</span>
													</span>
												</span>
												<span class="form-check form-check-custom form-check-solid">
													<input class="form-check-input" type="radio" checked="checked" name="framework" value="1" />
												</span>
											</label>
											<label class="d-flex flex-stack cursor-pointer mb-5">
												<span class="d-flex align-items-center me-2">
													<span class="symbol symbol-50px me-6">
														<span class="symbol-label bg-light-success">
															<i class="fab fa-react text-success fs-2x"></i>
														</span>
													</span>
													<span class="d-flex flex-column">
														<span class="fw-bolder fs-6">ReactJS</span>
														<span class="fs-7 text-muted">Robust and flexible app framework</span>
													</span>
												</span>
												<span class="form-check form-check-custom form-check-solid">
													<input class="form-check-input" type="radio" name="framework" value="2" />
												</span>
											</label>
											<label class="d-flex flex-stack cursor-pointer mb-5">
												<span class="d-flex align-items-center me-2">
													<span class="symbol symbol-50px me-6">
														<span class="symbol-label bg-light-danger">
															<i class="fab fa-angular text-danger fs-2x"></i>
														</span>
													</span>
													<span class="d-flex flex-column">
														<span class="fw-bolder fs-6">Angular</span>
														<span class="fs-7 text-muted">Powerful data mangement</span>
													</span>
												</span>
												<span class="form-check form-check-custom form-check-solid">
													<input class="form-check-input" type="radio" name="framework" value="3" />
												</span>
											</label>
											<label class="d-flex flex-stack cursor-pointer">
												<span class="d-flex align-items-center me-2">
													<span class="symbol symbol-50px me-6">
														<span class="symbol-label bg-light-primary">
															<i class="fab fa-vuejs text-primary fs-2x"></i>
														</span>
													</span>
													<span class="d-flex flex-column">
														<span class="fw-bolder fs-6">Vue</span>
														<span class="fs-7 text-muted">Lightweight and responsive framework</span>
													</span>
												</span>
												<span class="form-check form-check-custom form-check-solid">
													<input class="form-check-input" type="radio" name="framework" value="4" />
												</span>
											</label>
										</div>
									</div>
								</div>
								<div data-kt-stepper-element="content">
									<div class="w-100">
										<div class="fv-row mb-10">
											<label class="required fs-5 fw-bold mb-2">Database Name</label>
											<input type="text" class="form-control form-control-lg form-control-solid" name="dbname" placeholder="" value="master_db" />
										</div>
										<div class="fv-row">
											<label class="d-flex align-items-center fs-5 fw-bold mb-4">
												<span class="required">Select Database Engine</span>
												<i class="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Select your app database engine"></i>
											</label>
											<label class="d-flex flex-stack cursor-pointer mb-5">
												<span class="d-flex align-items-center me-2">
													<span class="symbol symbol-50px me-6">
														<span class="symbol-label bg-light-success">
															<i class="fas fa-database text-success fs-2x"></i>
														</span>
													</span>
													<span class="d-flex flex-column">
														<span class="fw-bolder fs-6">MySQL</span>
														<span class="fs-7 text-muted">Basic MySQL database</span>
													</span>
												</span>
												<span class="form-check form-check-custom form-check-solid">
													<input class="form-check-input" type="radio" name="dbengine" checked="checked" value="1" />
												</span>
											</label>
											<label class="d-flex flex-stack cursor-pointer mb-5">
												<span class="d-flex align-items-center me-2">
													<span class="symbol symbol-50px me-6">
														<span class="symbol-label bg-light-danger">
															<i class="fab fa-google text-danger fs-2x"></i>
														</span>
													</span>
													<span class="d-flex flex-column">
														<span class="fw-bolder fs-6">Firebase</span>
														<span class="fs-7 text-muted">Google based app data management</span>
													</span>
												</span>
												<span class="form-check form-check-custom form-check-solid">
													<input class="form-check-input" type="radio" name="dbengine" value="2" />
												</span>
											</label>
											<label class="d-flex flex-stack cursor-pointer">
												<span class="d-flex align-items-center me-2">
													<span class="symbol symbol-50px me-6">
														<span class="symbol-label bg-light-warning">
															<i class="fab fa-amazon text-warning fs-2x"></i>
														</span>
													</span>
													<span class="d-flex flex-column">
														<span class="fw-bolder fs-6">DynamoDB</span>
														<span class="fs-7 text-muted">Amazon Fast NoSQL Database</span>
													</span>
												</span>
												<span class="form-check form-check-custom form-check-solid">
													<input class="form-check-input" type="radio" name="dbengine" value="3" />
												</span>
											</label>
										</div>
									</div>
								</div>
								<div data-kt-stepper-element="content">
									<div class="w-100">
										<div class="d-flex flex-column mb-7 fv-row">
											<label class="d-flex align-items-center fs-6 fw-bold form-label mb-2">
												<span class="required">Name On Card</span>
												<i class="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Specify a card holder's name"></i>
											</label>
											<input type="text" class="form-control form-control-solid" placeholder="" name="card_name" value="Max Doe" />
										</div>
										<div class="d-flex flex-column mb-7 fv-row">
											<label class="required fs-6 fw-bold form-label mb-2">Card Number</label>
											<div class="position-relative">
												<input type="text" class="form-control form-control-solid" placeholder="Enter card number" name="card_number" value="4111 1111 1111 1111" />
												<div class="position-absolute translate-middle-y top-50 end-0 me-5">
													<img src="assets/media/svg/card-logos/visa.svg" alt="" class="h-25px" />
													<img src="assets/media/svg/card-logos/mastercard.svg" alt="" class="h-25px" />
													<img src="assets/media/svg/card-logos/american-express.svg" alt="" class="h-25px" />
												</div>
											</div>
										</div>
										<div class="row mb-10">
											<div class="col-md-8 fv-row">
												<label class="required fs-6 fw-bold form-label mb-2">Expiration Date</label>
												<div class="row fv-row">
													<div class="col-6">
														<select name="card_expiry_month" class="form-select form-select-solid" data-control="select2" data-hide-search="true" data-placeholder="Month">
															<option></option>
															<option value="1">1</option>
															<option value="2">2</option>
															<option value="3">3</option>
															<option value="4">4</option>
															<option value="5">5</option>
															<option value="6">6</option>
															<option value="7">7</option>
															<option value="8">8</option>
															<option value="9">9</option>
															<option value="10">10</option>
															<option value="11">11</option>
															<option value="12">12</option>
														</select>
													</div>
													<div class="col-6">
														<select name="card_expiry_year" class="form-select form-select-solid" data-control="select2" data-hide-search="true" data-placeholder="Year">
															<option></option>
															<option value="2021">2021</option>
															<option value="2022">2022</option>
															<option value="2023">2023</option>
															<option value="2024">2024</option>
															<option value="2025">2025</option>
															<option value="2026">2026</option>
															<option value="2027">2027</option>
															<option value="2028">2028</option>
															<option value="2029">2029</option>
															<option value="2030">2030</option>
															<option value="2031">2031</option>
														</select>
													</div>
												</div>
											</div>
											<div class="col-md-4 fv-row">
												<label class="d-flex align-items-center fs-6 fw-bold form-label mb-2">
													<span class="required">CVV</span>
													<i class="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Enter a card CVV code"></i>
												</label>
												<div class="position-relative">
													<input type="text" class="form-control form-control-solid" minlength="3" maxlength="4" placeholder="CVV" name="card_cvv" />
													<div class="position-absolute translate-middle-y top-50 end-0 me-3">
														<span class="svg-icon svg-icon-2hx">
															<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
																<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
																	<rect x="0" y="0" width="24" height="24" />
																	<rect fill="#000000" opacity="0.3" x="2" y="5" width="20" height="14" rx="2" />
																	<rect fill="#000000" x="2" y="8" width="20" height="3" />
																	<rect fill="#000000" opacity="0.3" x="16" y="14" width="4" height="2" rx="1" />
																</g>
															</svg>
														</span>
													</div>
												</div>
											</div>
										</div>
										<div class="d-flex flex-stack">
											<div class="me-5">
												<label class="fs-6 fw-bold form-label">Save Card for further billing?</label>
												<div class="fs-7 fw-bold text-gray-400">If you need more info, please check budget planning</div>
											</div>
											<label class="form-check form-switch form-check-custom form-check-solid">
												<input class="form-check-input" type="checkbox" value="1" checked="checked" />
												<span class="form-check-label fw-bold text-gray-400">Save Card</span>
											</label>
										</div>
									</div>
								</div>
								<div data-kt-stepper-element="content">
									<div class="w-100 text-center">
										<h1 class="fw-bolder text-dark mb-3">Release!</h1>
										<div class="text-muted fw-bold fs-3">Submit your app to kickstart your project.</div>
										<div class="text-center mb-5 py-15 px-4">
											<img class="mw-100 mh-150px" alt="" src="assets/media/illustrations/verification.png" />
										</div>
									</div>
								</div>
								<div class="d-flex flex-stack pt-10">
									<div class="me-2">
										<button type="button" class="btn btn-lg btn-light-primary me-3" data-kt-stepper-action="previous">
										<span class="svg-icon svg-icon-3 me-1">
											<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
												<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
													<polygon points="0 0 24 0 24 24 0 24" />
													<rect fill="#000000" opacity="0.3" transform="translate(15.000000, 12.000000) scale(-1, 1) rotate(-90.000000) translate(-15.000000, -12.000000)" x="14" y="7" width="2" height="10" rx="1" />
													<path d="M3.7071045,15.7071045 C3.3165802,16.0976288 2.68341522,16.0976288 2.29289093,15.7071045 C1.90236664,15.3165802 1.90236664,14.6834152 2.29289093,14.2928909 L8.29289093,8.29289093 C8.67146987,7.914312 9.28105631,7.90106637 9.67572234,8.26284357 L15.6757223,13.7628436 C16.0828413,14.136036 16.1103443,14.7686034 15.7371519,15.1757223 C15.3639594,15.5828413 14.7313921,15.6103443 14.3242731,15.2371519 L9.03007346,10.3841355 L3.7071045,15.7071045 Z" fill="#000000" fill-rule="nonzero" transform="translate(9.000001, 11.999997) scale(-1, -1) rotate(90.000000) translate(-9.000001, -11.999997)" />
												</g>
											</svg>
										</span>
									</div>
									<div>
										<button type="button" class="btn btn-lg btn-primary" data-kt-stepper-action="submit">
											<span class="indicator-label">Submit
											<span class="svg-icon svg-icon-3 ms-2 me-0">
												<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
													<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
														<polygon points="0 0 24 0 24 24 0 24" />
														<rect fill="#000000" opacity="0.5" transform="translate(8.500000, 12.000000) rotate(-90.000000) translate(-8.500000, -12.000000)" x="7.5" y="7.5" width="2" height="9" rx="1" />
														<path d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z" fill="#000000" fill-rule="nonzero" transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)" />
													</g>
												</svg>
											</span>
											<span class="indicator-progress">Please wait...
											<span class="spinner-border spinner-border-sm align-middle ms-2"></span></span>
										</button>
										<button type="button" class="btn btn-lg btn-primary" data-kt-stepper-action="next">Continue
										<span class="svg-icon svg-icon-3 ms-1 me-0">
											<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
												<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
													<polygon points="0 0 24 0 24 24 0 24" />
													<rect fill="#000000" opacity="0.5" transform="translate(8.500000, 12.000000) rotate(-90.000000) translate(-8.500000, -12.000000)" x="7.5" y="7.5" width="2" height="9" rx="1" />
													<path d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z" fill="#000000" fill-rule="nonzero" transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)" />
												</g>
											</svg>
										</span>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div id="kt_scrolltop" class="scrolltop" data-kt-scrolltop="true">
		<span class="svg-icon">
			<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
				<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
					<polygon points="0 0 24 0 24 24 0 24" />
					<rect fill="#000000" opacity="0.5" x="11" y="10" width="2" height="10" rx="1" />
					<path d="M6.70710678,12.7071068 C6.31658249,13.0976311 5.68341751,13.0976311 5.29289322,12.7071068 C4.90236893,12.3165825 4.90236893,11.6834175 5.29289322,11.2928932 L11.2928932,5.29289322 C11.6714722,4.91431428 12.2810586,4.90106866 12.6757246,5.26284586 L18.6757246,10.7628459 C19.0828436,11.1360383 19.1103465,11.7686056 18.7371541,12.1757246 C18.3639617,12.5828436 17.7313944,12.6103465 17.3242754,12.2371541 L12.0300757,7.38413782 L6.70710678,12.7071068 Z" fill="#000000" fill-rule="nonzero" />
				</g>
			</svg>
		</span>
	</div>
	<script src="assets/plugins/global/plugins.bundle.js"></script>
	<script src="assets/js/scripts.bundle.js"></script>
	<script src="assets/js/custom/widgets.js"></script>
</div>
