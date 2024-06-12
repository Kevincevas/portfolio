import '../../public/assets/js/main.js'
import '../../public/assets/css/style.css'
import ProgressBar from './ProgressBar.jsx'

export default function Habilidades() {
  return (
    <div>
        
        <section id="skills" className="skills section-bg">
            <div className="container" data-aos="fade-up">

            <div className="section-title">
                <h2> Mis Habilidades</h2>
                {/* <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p> */}
            </div>

            <div className="row skills-content">

                <div className="col-lg-6">

                <div className="progress">
                    <ProgressBar skill={'PHP'} value={55} />
                </div>

                <div className="progress">
                    <ProgressBar skill={'JAVASCRIPT (ES2015+)'} value={57} />
                </div>

                <div className="progress">
                    <ProgressBar skill={'HTML'} value={54} />
                </div>

                </div>

                <div className="col-lg-6">

                <div className="progress">
                    <ProgressBar skill={'CSS'} value={52} />
                </div>

                <div className="progress">
                    <ProgressBar skill={'SQL'} value={55} />
                </div>

                <div className="progress">
                    <ProgressBar skill={'NO-SQL'} value={20} />
                </div>

                </div>

            </div>

            </div>
        </section>
    </div>
  )
}
